import React, { useEffect, useRef, useState } from "react";
import { Button, Checkbox, Col, Drawer, Dropdown, Form, Input, InputRef, Menu, message, Modal, notification, Row, Space, Switch } from "antd";
import { getUser, login,register } from "src/common/APIs";
import { NoticeType } from "antd/es/message/interface";
import { MenuProps } from "rc-menu";
import { DashOutlined } from "@ant-design/icons";
import {
  AppstoreOutlined,
  EllipsisOutlined,
  MailOutlined,
  MenuOutlined,
  SearchOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons/lib/icons";
import Image from "next/image";
import Logo from "public/icon.png";
import { parse } from "path";
import { stringify } from "querystring";


interface Iaccount {
  username: string;
  password: string;
}



function stringToBool<Boolean>(str: string) {
  switch(str) {
    case 'true':
      return true
      break;
    default:
      return false
  }
}



function FormAccInput(props :any) {
  const {media, textName ,placeholder,type} = props
  const setInput = (e:any) => {
    props.valInput(e.target.value)
  }

  return (
    <Row style={{width:"100%"}}>
      <Col span={24} md={8} className= {media ? 'form__labal form--padding u-text-end' : 'form__labal form--padding'}>
        {textName}
      </Col>
      <Col span={24} md={16} className="form--padding">
        <Input placeholder={placeholder} type={type} onChange={(el) => setInput(el)} className="form__input"/>
      </Col>
    </Row>
  )
}

function FormAccSubmit(props :any) {

  const {media, click, nextForm, textCheckbox, textNote, nameButton} = props
  return (
    <Row style={{width:"100%"}}>
      {textCheckbox != "" && textNote != ""?
        <Row style={{width:"100%"}}>
            <Col span={24} md={12} >
            <Checkbox className="form--padding">
              <div className="form__labal">{textCheckbox}</div>
            </Checkbox>
          </Col>
          <Col span={24} md={12} className={media ? "u-text-end form--padding" : "u-text-center form--padding"}  style={{cursor:"pointer"}}>
            <u onClick={nextForm}>{textNote}</u>
          </Col>
        </Row> : ""
      }
      
      
      <Col span={24} className="u-flex-box-center form--padding">
        
        <Button onClick={click} className="u-text-center c-button">{nameButton}</Button>
        
      </Col>
    </Row>
  )
}





function Header(props: any) {
  const [api, contextHolder] = notification.useNotification();
  
  const [account, setAccount] = useState({ username: "", password: "" });

  const [media, setMatches] = useState(true);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<Boolean>(false);
  const [isModalOpenLogin, setIsModalOpenLogin] = useState(false);
  const [isModalOpenRegister, setIsModalOpenRegister] = useState(false);

  const [usenameLogin, setUsenameLogin] = useState();
  const [passwordLogin, setPasswordLogin] = useState();




  const [emailRegister, setEmailRegister] = useState();
  const [usenameRegister, setUsenameRegister] = useState();
  const [passwordRegister, setPasswordRegister] = useState();
  const [firstNameRegister, setFirstNameRegister] = useState();
  const [lastNameRegister, setLastNameRegister] = useState();
  const [birthDayRegister, setBirthDayRegister] = useState();

  
  const [checkLogin, setCheckLogin] = useState<boolean>();
  const [nameLogin, setNameLogin] = useState<string>("");




  function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }



  
  
  useEffect(() => {
    // matchMedia
    setMatches(window.matchMedia("(min-width: 768px)").matches);
    window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => setMatches(e.matches));

    // set theme
    const getLocalTheme = localStorage.getItem('theme')
    console.log(typeof getLocalTheme)
    if (getLocalTheme) {
      setTheme(stringToBool(getLocalTheme))
      props.changeTheme(stringToBool(getLocalTheme))
    }
    // get token
    const tokenLocal = localStorage.getItem("user_token");
    if (tokenLocal) {
      console.log(tokenLocal)
      //getUser(tokenLocal).then((res) => console.log(res));
      // getUser(token).then((res) => {
      //   //setCheckLogin(true)
      //   console.log(res)
      // });
    }
  }, []);


  const showModalLogin = () => {
    setIsModalOpenLogin(true);
  };

  const modalCloseLogin = () => {
    setIsModalOpenLogin(false);
  }
  const showModalRegister = () => {
    setIsModalOpenRegister(true);
  }
  const modalCloseRegister= () => {
    setIsModalOpenRegister(false);
  }

  const onChangedTheme = (e: boolean) => {
    localStorage.setItem('theme', `${e}`)
    props.changeTheme(e);
    setTheme(e)
  };


  // tool menu
  const menuTool: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div className="u-flex-box-between">
          <div>Chế độ</div>
          <Switch defaultChecked={ theme ? true : false} onChange={(e) => onChangedTheme(e)} />
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className="u-flex-box-between">
          <div>Auto play</div>
          <Switch />
        </div>
      ),
    },
  ];
  type MenuItem = Required<MenuProps>['items'][number];

  

  // haeder menu

  const menuHeader: MenuItem[] = [
    getItem('name1', 'sub1', <MailOutlined />, [
      getItem('name2', '1'),
      getItem('name3', '2'),
      getItem('Option 3', '3'),
      getItem('Option 4', '4'),
    ]),
  
    getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
      getItem('Option 5', '5'),
      getItem('Option 6', '6'),
      getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    ]),
  
    getItem('Navigation Three', 'sub4', <SettingOutlined />, [
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),
      getItem('Option 11', '11'),
      getItem('Option 12', '12'),
    ]),
  ];

  // const [firstNameRegister, setFirstNameRegister] = useState();
  // const [lastNameRegister, setLastNameRegister] = useState();
  // const [birthDayRegister, setBirthDayRegister] = useState();
  // login
  
  const loginAcc = () => {
    if(usenameLogin && passwordLogin) {
      const data:{
        username:string,
        password:string
      } = {
        username: usenameLogin,
        password: passwordLogin
      } 

      login(data).then((res:any) => {
          if(res && res.success==true) {

            const fullName = res.user.first_name + " " + res.user.last_name
            const token = res.jwt
            let toDay:any = new Date() 
            toDay = toDay.getTime()

            let dataLocalUser = {
              token : "dsa"

            }


            api.open({
              message: `Check the spelling and try again`,
              description: "",
              type: 'success',
              duration: 2
            });
            modalCloseLogin()
            setCheckLogin(true)
            setNameLogin(fullName)
            localStorage.setItem('user', "");

          } else {
            var toDay = new Date();
            console.log(toDay)
            //let response = JSON.parse(res.request.response)
            api.open({
              message: `Incorrect username or password`,
              description: "",
              type: 'error',
              duration: 2
            });
          }
      })
    } else {
      api.open({
        message: `Check the Invalid and try again`,
        description: "",
        type: 'error',
        duration: 2
      });
    }
  }
  
  const registerAcc = () => {
    console.log(emailRegister, usenameRegister, passwordRegister)

    if(emailRegister && usenameRegister && passwordRegister && firstNameRegister && lastNameRegister && birthDayRegister) {
      let  adb = new Date("December 17, 1995 03:24:00")
      console.log(birthDayRegister,emailRegister)
      const data:{
        username: string;
        first_name: string;
        last_name: string;
        date_of_birth: Date;
        email: string;
        password: string;
      } = {

        username: usenameRegister,
        first_name: firstNameRegister,
        last_name: lastNameRegister,
        date_of_birth: birthDayRegister,
        email:emailRegister,
        password: passwordRegister,
      } 

      register(data).then((res:any) => {
        console.log(res)
        if (res.success && res) {
          api.open({
            message: `Successful account creation`,
            description: "",
            type: 'success',
            duration: 2,
          })
          showModalLogin()
          modalCloseRegister()
          
        } else
          if(res.request) {
            let response = JSON.parse(res.request.response)
            let messageFrom =""
              if (response.error) {
                if (response.error.email && response.error.username) messageFrom = "email and username already exists"
                else if(response.error.email)  messageFrom = "email already exists"
                else if(response.error.username)  messageFrom = "username already exists"
              }
            api.open({
              message: messageFrom,
              description: "",
              type: 'error',
              duration: 2
            });
            
          } else {
            api.open({
              message: "error",
              description: "",
              type: 'error',
              duration: 2
            });
            
          }
        
      })
    } else {
      api.open({
        message: `Check the spelling and try again`,
        description: "",
        type: 'error',
        duration: 2
      });
    }
  }


 
  
  return (
    <div className="header ">
      <div className="l-container">
        <div className="l-container-margin">
          <Row>
            <Col span={10} md={8} className="u-flex-wrap">
              <div className="header__menu header--item u-flex-box-center">
                <MenuOutlined onClick={ () => setOpen(true)}/>
              </div>
              {media && (
                <div className="header--item u-flex-box-center">
                  <Image
                    className="header__logo"
                    width={30}
                    height={30}
                    src={Logo}
                    alt={"Logo"}
                  ></Image>
                </div>
              )}
              <div className="header--item u-flex-box-center u-color-outstan">Home</div>
            </Col>
            <Col span={4} md={8} className="u-flex-box-center">
              {media ? (
                <div className="header__seach header--item u-flex-box-center">
                  <Form>
                    <Input.Group compact>
                      <Input
                        className="header__seach--input"
                        placeholder="Seach"
                        
                        bordered={false}
                      ></Input>
                      <Button
                        className="header__seach--button c-button"
                        icon={<SearchOutlined />}
                      ></Button>
                    </Input.Group>
                  </Form>
                </div>
              ) : (
                <div className="header--item u-flex-box-center">
                  <Image
                    className="header__logo"
                    width={30}
                    height={30}
                    src={Logo}
                    alt={"Logo"}
                  ></Image>
                </div>
              )}
            </Col>
            <Col span={10} md={8} className="u-flex-box-end">
              {
                media && (
                  <div className="header--item u-flex-box-center">luu img</div>
                )
              }
              <div className="header__tool header--item u-flex-box-center u-text-bold">
                <Dropdown menu={{ items: menuTool }} placement="bottomLeft">
                  <div className="u-flex-text-center">
                    <EllipsisOutlined />
                  </div>
                </Dropdown>
              </div>
              <div className="header--item u-flex-box-center header__acc">
                {checkLogin 
                  ? <a className="header__acc--name"><UserOutlined style={{padding: "10px"}}/>{nameLogin}</a>
                  : <Button className="c-button" onClick={showModalLogin} >Đăng nhập</Button> 
                }
              </div>
            </Col>
          </Row>
        </div>
      </div>
        {/* menuHeader */}
      <Drawer
        title="Pennywort & Potato"
        placement="left"
        width={250}
        onClose={() => setOpen(false)}
        style={{padding : '0px'}}
        bodyStyle={{padding : '0px'}}
        open={open}
        className={ theme ? 'l-dark header__modal' : 'l-light header__modal'}
      >
        <Menu
          mode="inline"
          className={theme ? 'l-dark header__modal--drop' : 'l-light header__modal--drop'}
          style={{ width: 250 }}
          items={menuHeader}
        />
      </Drawer>
        {/* login */}
      <Modal 
        title="Login" 
        open={isModalOpenLogin} 
        onCancel={modalCloseLogin}
        className={theme ? 'l-dark header__modal__login' : 'l-light header__modal__login'}
        footer={null}
        width={500}
      >
        <FormAccInput 
          media={media}
          textName="Username"
          placeholder="Username"
          type="text"
          valInput={(el:any)=>setUsenameLogin(el)}
        />
        <FormAccInput 
          media={media}
          textName="Password"
          placeholder="Password"
          type="text"
          valInput={(el:any)=>setPasswordLogin(el)}
        />
         
        <FormAccSubmit
          media={media}
          nameButton="Login"
          textCheckbox= "Keep me logged in"
          textNote="Forgot username or password?"
          click={() => loginAcc()}
          nextForm ={() => {
            showModalRegister()
            modalCloseLogin()
          }}
        />
      </Modal>
      <Modal 
        title="Register" 
        open={isModalOpenRegister} 
        onCancel={modalCloseRegister}
        className={theme ? 'l-dark header__modal__login' : 'l-light header__modal__login'}
        footer={null}
        width={500}
      >

        <FormAccInput 
          media={media}
          textName="email"
          placeholder="email"
          type="text"
          valInput={(el:any)=>setEmailRegister(el)}
        />
        <FormAccInput 
          media={media}
          textName="Username"
          placeholder="Username"
          type="text"
          valInput={(el:any)=>setUsenameRegister(el)}
        />
        <FormAccInput 
          media={media}
          textName="Password"
          placeholder="Password"
          type="text"
          valInput={(el:any)=>setPasswordRegister(el)}
        />
     
        <FormAccInput 
          media={media}
          textName="First Name"
          placeholder="First Name"
          type="text"
          valInput={(el:any)=>setFirstNameRegister(el)}
        />
        <FormAccInput 
          media={media}
          textName="Last Name"
          placeholder="Last Name"
          type="text"
          valInput={(el:any)=>setLastNameRegister(el)}
        />
        <FormAccInput 
          media={media}
          textName="Birth Day"
          placeholder="Birth Day"
          type="date"
          valInput={(el:any)=>setBirthDayRegister(el)}
        />
        <FormAccSubmit
          media={media}
          nameButton="Creation"
          textCheckbox= "Keep me logged in"
          textNote="Forgot username or password?"
          click={() => registerAcc()}
          nextForm ={() => {
            showModalLogin()
            modalCloseRegister()
          }}
        />
      </Modal>
      

      {contextHolder}
    </div>
    
  );
}

export default Header;
