import styled from 'styled-components'
import logoPic from '../../statics/logo.png'
import beatPic from '../../statics/beta.png'

export const UnderLine = styled("div")`
	height: 56px;
    border-bottom: 1px solid #f0f0f0;
`;
export const Container = styled("div")`
    position: relative;
    width: 945px;
    height: 58px;
    top: -53px;
    margin-left: 220px;
  .left{
    display: inline-block;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 50%;
    position: relative;
    right: 32px;
    top: 2px;
  }
  .bg_active{
    background: #969696;
  }
`;
export const Item = styled("div")`
  margin-right: 10px;
  display: inline-block;
  &.index{
    width: 59px;
    height: 26px;
    padding: 15px;
    color: #ea6f5a;
    font-size: 17px;
  }
  &.download{
    margin-left: 15px;
    width: 90px;
    height: 26px;
  }
`;

export const Search = styled("input")`
  border: 1px solid #eee;
  border-radius: 40px;
  width: 178px;
  height: 36px;
  padding: 0 40px 0 20px;
  margin-left: 15px;
  background: #eee;
  outline: none;
  &.slide-enter{
    transition: all .3s ease-out ;
  }
  &.slide-enter-active{
    width: 300px;
  }
  &.slide-enter-done{
    width: 300px;
  }
  &.slide-exit{
    transition: all .3s ease-in ;
  }
  &.slide-exit-active{
    width: 178px;
  }
  &.slide-exit-done{
    width: 178px;
  }
`;

export const NavBar = styled("div")`
	width: 1440px;
	margin: 0 auto;
`;
export const Beta = styled("div")`
  display: inline-block;
  width: 56px;
  height: 25px;
  background-image: url(${beatPic});
  background-size: contain;
  float: right;
  margin: 15px 12px 0
`;
export const  Aa= styled("div")`
 display: inline-block;
 width: 24px;
 height: 20px;
 line-height: 20px;
 float: right;
 padding: 17px 10px;
`;
export const ABtn = styled("a")`
    display: inline-block;
    float: right;
    text-align: center;
    /*box-sizing: border-box;*/
    &.writing{
        width:74px;
        height: 26px;
        background: #EA6F5A;
        margin: 8px 12px 0;
        padding: 6px 12px;
        line-height: 26px;
        color: #fff;
        border-radius: 20px
     }
    &.signUp{
        /*box-sizing: border-box;*/
        width:54px;
        height: 24px;
        line-height: 24px;
        border: 1px solid #ec6149b3;
        color: #ea6f5a;
        border-radius: 20px;
        margin: 9px 5px 0 15px;
        padding: 6px 12px;
     }
    &.signIn{
        width: 30px;
        height: 20px;
        color: #969696;
        margin: 11px 6px 0 10px;
        padding: 6px 12px;
        font-size: 15px;
        line-height: 20px;
     }
`

export const Icon = styled("a")`
	display: inline-block;
	width: 100px;
	height: 56px;
	background-image: url(${logoPic});
	background-size: contain;
`
