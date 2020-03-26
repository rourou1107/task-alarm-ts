import React from 'react';
import {Button, Input} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import axios from '../../config/axios'
import './login.scss'
interface MyLoginState {
    account: string,
    password: string
}
class Login extends React.Component<any, MyLoginState>{
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props: any) {
        super(props);
        this.state = {
            account: '',
            password: ''
        }
    }
    onChange = (key:keyof MyLoginState, value: string)=>{
        const newState = {
            account: this.state.account,
            password: this.state.password
        }
        newState[key] = value
        this.setState(newState)
    }
    login = async ()=>{
        const {account, password} = this.state
        try{
            await axios.post('sign_in/user',{
                account,
                password
            }).then(()=>{
                this.props.history.push('/')
            })
        }catch(e){
            throw new Error(e)
        }
    }
    render (){
        return (
            <div id='login'>
                <h1 className={'title'}>番茄任务闹钟登录页面</h1>
                <Input
                    placeholder="请输入你的用户名"
                    prefix={<UserOutlined className="username"/>}
                    value={this.state.account}
                    onChange={(e)=> this.onChange('account', e.target.value)}
                />
                <Input.Password placeholder="请输入你的密码"
                                value={this.state.password}
                                onChange={(e)=>this.onChange('password', e.target.value)}
                />
                <Button type="primary" block onClick={this.login}>登录</Button>
            </div>
        )
    }
}

export default Login;
