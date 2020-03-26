import React from 'react';
import {Button} from 'antd';
import axios from '../../config/axios';

interface MyHomeState {
    account: string
}

class Home extends React.Component<any, MyHomeState> {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props: any) {
        super(props);
        this.state = {
            account: ''
        };
    }

    async componentDidMount() {
        await this.getUserInfo();
    }

    getUserInfo = async () => { // async 函数会返回一个 Promise 对象
        const response = await axios.get('me'); // response 是 promise 返回的值
        this.setState({account: response.data.account});

    };
    logout = () => {
        // 清除 token，防止用户直接进入首页
        window.localStorage.setItem('x-token', '');
        this.props.history.push('/login');
    };

    render() {
        return (
            <div>
                欢迎，{this.state.account}
                <Button onClick={this.logout}>退出</Button>
            </div>
        );
    }
}

export default Home;
