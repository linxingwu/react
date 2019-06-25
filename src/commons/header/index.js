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
import {CSSTransition} from 'react-transition-group'

class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            focused:false
        }
    }

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
                        <CSSTransition
                            in={this.state.focused}
                            timeout={300}
                            classNames={"slide"}
                        >
                            <Search placeholder={"搜索"}
                                    className={this.state.focused ? "active" : ""}
                                    onFocus={()=>{this.setState({focused:true})}}
                                    onBlur={()=>{this.setState({focused:false})}}
                            />
                        </CSSTransition>
                        <i className={this.state.focused?"iconfont left bg_active":"iconfont left"}>&#xe662;</i>
                    </Container>
                </NavBar>
            </UnderLine>
        )
    }
}
export default Header;