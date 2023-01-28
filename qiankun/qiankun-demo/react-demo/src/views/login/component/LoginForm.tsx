import React from 'react'
import { useNavigate } from 'react-router-dom'
/* ant */
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Form, message, Input } from 'antd'
import { loginAPI } from '@/api/modules/user'
import { ILogin } from '@/type'
// mobx
import useStore from '@/store'
import classes from '../index.module.scss'

const BASE_NAME = (window as any).__POWERED_BY_QIANKUN__ ? '/react-app' : ''
const LoginForm = () => {
  const navigate = useNavigate()
  const [form] = Form.useForm()

  const {
    useUserStore: { setToken },
  } = useStore()

  //#region  login
  const onFinish = async (data: ILogin) => {
    const res = await loginAPI(data)

    if (res.data.status === 200) {
      setToken(res.data.token as string)
      // qiankun 跳转
      navigate(BASE_NAME + '/')
      message.success('登录成功！')
    } else {
      message.error(res.data.message)
    }
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  //#endregion

  return (
    <Form
      form={form}
      name="normal_login"
      className={classes['login-form']}
      initialValues={{
        username: 'admin',
        password: 123456,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <div className={classes['title-container']}>
        <h3 className={classes['title']}>Login</h3>
      </div>
      <Form.Item
        name="username"
        rules={[
          {
            min: 4,
            max: 8,
            required: true,
            message: '请输入4~8位账号!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="账号:admin" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            pattern: new RegExp('^.{4,8}$'),
            required: true,
            message: '请输入4~8位密码!',
          },
        ]} // 此处password如果使用min，max正则，则初始值无法被检测到，换成pattern则无问题
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="密码:123456"
        />
      </Form.Item>

      <Form.Item>
        <Button
          className={`login-form-button ${classes['login-btn']}`}
          onClick={() => form.resetFields()}
        >
          重置
        </Button>
        <Button
          type="primary"
          htmlType="submit"
          className={`login-form-button ${classes['login-btn']}`}
        >
          登录
        </Button>
      </Form.Item>
    </Form>
  )
}

export default LoginForm
