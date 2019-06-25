import React,{ Component } from 'react'
import {
    UnderLine,
    NavBar,
    Icon,
    ABtn,
    Beta,
    Aa,
    Container,
    Item,
    Search
} from './style'

class Header extends Component{
    render(){
        return (
            <UnderLine>
                <NavBar>
                    <Icon href="/"/>
                    <ABtn className="writing">
                        <i className="iconfont">&#xe600;</i>
                        写文章
                    </ABtn>
                    <ABtn className="signUp">注册</ABtn>
                    <ABtn className="signIn">登录</ABtn>
                    <Beta/>
                    <Aa>
                        <i className="iconfont">&#xe607;</i>
                    </Aa>
                    <Container>
                        <Item className={"index"}>
                            <i className="iconfont">&#xe606;</i>
                            首页
                        </Item>
                        <Item className={"download"}>
                            <i className="iconfont">&#xe601;</i>
                            下载App
                        </Item>
                        <Search placeholder={"搜索"}/>
                        <i className="iconfont left">&#xe662;</i>
                    </Container>
                </NavBar>
            </UnderLine>
        )
    }
}
export default Header;