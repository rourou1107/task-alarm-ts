import React from 'react';
import {Button, Input} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import axios from '../../config/axios'
import './SignUp.scss';
import {Link} from 'react-router-dom';
interface MySignUpState {
    account: string,
    password: string,
    password_confirmation: string
}
class SignUp extends React.Component<any, MySignUpState> { // props类型, state 类型
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props:any ) {
        super(props);
        this.state = {
            account: '',
            password: '',
            password_confirmation: ''
        }
    }
    onChangeAccount = (e: React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({account: e.target.value})
    }
    onChangePassword = (e: React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({password: e.target.value})
    }
    onChangePasswordConfirmation = (e: React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({password_confirmation: e.target.value})
    }
    signUp = async () => {
        const { account,password,password_confirmation } = this.state;
        try{
            await axios.post('sign_up/user',{
                account,
                password,
                password_confirmation: password_confirmation
            })
            this.props.history.push('/')
        }catch(e){
            throw new Error(e)
        }
    }
    render() {
        return (
            <div id='signUp'>
                <h1 className={'title'}>番茄任务闹钟注册页面</h1>
                <Input
                    placeholder="请输入你的用户名"
                    prefix={<UserOutlined className="username"/>}
                    value={this.state.account}
                    onChange={this.onChangeAccount}
                />
                <Input.Password placeholder="请输入你的密码"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                />
                <Input.Password placeholder="请确认密码"
                    value={this.state.password_confirmation}
                    onChange={this.onChangePasswordConfirmation}
                />
                <Button type="primary" block onClick={this.signUp}>注册</Button>
                <span>已有账号？<Link className={'login'} to='/login'>立即登录</Link></span>
            </div>
        );
    }
}
export default SignUp;
