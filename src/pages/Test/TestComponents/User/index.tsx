import React, { useState } from 'react';
import { getHost, objectToFormData } from '@/src/common/Utils';
import { Avatar, Button, Divider, Input, message, Tooltip } from 'antd';
import { uploadImgur, createPost } from '@/src/common/APIs';
import { useRouter } from 'next/router';
import { UserOutlined } from '@ant-design/icons';


function User(props: any) {
  const { user, setUserToken, userToken } = props;

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const router = useRouter()

  const onUpload = (files: FileList | null) => {
    if (!title) return message.error('Missing title')
    let queue: Promise<any>[] = []
    if (files && files.length) {
      for(let file of files) {
        let params = objectToFormData({
          image: file,
          type: 'file',
        })
        queue = [...queue, uploadImgur(params)]
      }
    }
    Promise.all(queue).then((res: any) => {
      const contents = res.reduce((acc: object[], perRes: {[key: string]: any}) => {
        if (perRes.success) {
          let { id, link, type } = perRes.data
          acc = [...acc, { alt: id, src: link, content_type: type }]
        } else acc
        return acc
      }, [])
      const params: IPostParams = {
        title,
        body,
        contents
      }
      createPost(userToken, params).then(res => {
        if (res.success) message.success('Upload succeeded')
        else message.error('Upload failed')
      })
    })
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }} >
      <div style={{ width: '50%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Tooltip placement="bottom" title={user.username} color={'#333'}>
            <Avatar 
              icon={<UserOutlined />}
              style={{ backgroundColor: '#333', cursor: 'pointer' }}
              onClick={() => router.push(`${getHost}/user/${user.id}`)}
            />
          </Tooltip>
          <Button onClick={() => setUserToken('')}>Logout</Button>
        </div>
        <Divider />
        <Input type='text' onChange={e => setTitle(e.target.value)}/>
        <Input.TextArea rows={4} onChange={e => setBody(e.target.value)} />
        <Input type='file' onChange={e => onUpload(e.target.files)} multiple/>
      </div>
    </div>
  );
}

export default User;
