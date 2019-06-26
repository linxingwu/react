import React from 'react'
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
import {connect} from 'react-redux'
import {actionCreator} from './store'
const Header = (props)=>{
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
                        in={props.focused}
                        timeout={300}
                        classNames={"slide"}
                    >
                        <Search placeholder={"搜索"}
                                onFocus={()=>{props.handleFocusd()}}
                                onBlur={()=>{props.handleBlured()}}
                        />
                    </CSSTransition>
                    <i className={props.focused?"iconfont left bg_active":"iconfont left"}>&#xe662;</i>
                </Container>
            </NavBar>
        </UnderLine>
    )
}

const stateToProps=(state)=>{
    return {
        focused:state.header.focused
    }
}
const dispatchToProps = (dispatch)=>{
    return {
        handleFocusd:()=>{
            dispatch(actionCreator.searchFocus())
        },
        handleBlured:()=>{
            dispatch(actionCreator.searchBlur())
        }
    }
}

export default connect(stateToProps,dispatchToProps)(Header);