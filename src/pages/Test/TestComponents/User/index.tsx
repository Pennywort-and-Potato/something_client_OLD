import React, { useState } from 'react';
import { getHost, objectToFormData } from '@/src/common/Utils';
import {
  Avatar,
  Button,
  Divider,
  Input,
  message,
  Progress,
  Tooltip,
} from 'antd';
import { uploadImgur, createPost } from '@/src/common/APIs';
import { useRouter } from 'next/router';
import {
  CheckCircleTwoTone,
  CloseCircleTwoTone,
  UserOutlined,
} from '@ant-design/icons';
import { isEmpty } from 'lodash';

function User(props: any) {
  const { user, setUserToken, userToken } = props;

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const [progress, setProgress] = useState<number>(0);
  const [logger, setLogger] = useState<{ [key: string]: any }[]>([]);

  const router = useRouter();

  const increase = (lenght: number) => {
    setProgress((prevPercent) => {
      const newPercent = prevPercent + 100 / lenght;
      if (newPercent > 100) {
        return 100;
      }
      return newPercent;
    });
  };

  const changeLog = (log: object) => {
    setLogger((prevLog) => {
      const newLog = [...prevLog, log];
      return newLog;
    });
  };

  const reset = () => {
    setProgress(0);
    setLogger([]);
  };

  const onUploadImgur = (files: FileList | null) => {
    if (!title) return message.error('Missing title');
    reset();
    let queue: Promise<any>[] = [];
    if (files && files.length) {
      for (let file of files) {
        let params = objectToFormData({
          image: file,
          type: 'file',
        });
        const proms = uploadImgur(params).then((res) => {
          let log = { name: file.name, succeed: true };
          increase(files.length);
          if (res.success) {
            const { id, link, type } = res.data;
            changeLog(log);
            return { alt: id, src: link, content_type: type };
          } else {
            log.succeed = false;
            changeLog(log);
          }
        });
        queue = [...queue, proms];
      }
    }
    if (!isEmpty(queue)) onUploadDb(queue);
  };

  const onUploadDb = (queue: Promise<any>[]) => {
    return Promise.all(queue).then((res: any) => {

      if (res.every((item: any) => !item)) {
        return message.error('Upload failed');
      }

      const params: IPostParams = {
        title,
        body,
        contents: res.filter((n: any) => n),
      };

      createPost(userToken, params).then((res) => {
        if (res.success) message.success('Upload succeeded');
        else message.error('Upload failed');

      });
    });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '50%' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Tooltip placement='bottom' title={user.username} color={'#333'}>
            <Avatar
              icon={<UserOutlined />}
              style={{ backgroundColor: '#333', cursor: 'pointer' }}
              onClick={() => router.push(`${getHost}/user/${user.id}`)}
            />
          </Tooltip>
          <Button onClick={() => setUserToken('')}>Logout</Button>
        </div>
        <Divider />
        <Input type='text' onChange={(e) => setTitle(e.target.value)} />
        <Divider />
        <Input.TextArea rows={4} onChange={(e) => setBody(e.target.value)} />
        <Divider />
        <Input
          type='file'
          onChange={(e) => onUploadImgur(e.target.files)}
          multiple
        />
        <Progress percent={progress} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {logger.map((log: any, index: number) => (
            <div
              key={index}
              style={{
                marginBottom: 16,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                outline: '1px solid',
                outlineColor: log.succeed ? '#52c41a' : 'red',
                padding: '4px 16px',
                backgroundColor: '#9ed88b',
                borderRadius: 8
              }}
            >
              <div
                style={{
                  width: 'fit-content',
                }}
              >
                {log.name}
              </div>
              {log.succeed ? (
                <CheckCircleTwoTone twoToneColor='#52c41a' />
              ) : (
                <CloseCircleTwoTone twoToneColor='red' />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default User;
