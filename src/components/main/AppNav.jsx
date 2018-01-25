import React, { Component } from 'react'
import {Link} from 'react-router'
import navImg from '../../static/imgs/nav.png'

class AppNav extends Component {
  render () {
    return (
      <section className="list-category-5">
        <div className="row"> 
          <div> 
            <span className="i i0 lpg" style={{backgroundImage: `url(${navImg})`}}></span><br/>
            <span className="txt">良品购</span> 
            <span className="border"></span> 
          </div> 
          <div> 
            <span className="i i1 tmh" style={{backgroundImage: `url(${navImg})`}}></span><br/>
            <span className="txt">商店</span> 
            <span className="border"></span> 
          </div> 
          <div> 
            <span className="i i2 mscp" style={{backgroundImage: `url(${navImg})`}}></span><br/>
            <span className="txt">美食菜谱</span> 
            <span className="border"></span> 
          </div> 
          <div> 
            <span className="i i3 jjsh" style={{backgroundImage: `url(${navImg})`}}></span><br/>
            <span className="txt">家居生活</span> 
          </div> 
        </div> 
        <div className="row"> 
          <div> 
            <span className="i i4 bz" style={{backgroundImage: `url(${navImg})`}}></span><br/>
            <span className="txt">壁纸</span> 
            <span className="border"></span> 
          </div> 
          <div> 
            <span className="i i5 tx" style={{backgroundImage: `url(${navImg})`}}></span><br/>
            <span className="txt">头像</span> 
            <span className="border"></span> 
          </div> 
          <div> 
            <span className="i i6 bq" style={{backgroundImage: `url(${navImg})`}}></span><br/>
            <span className="txt">表情</span> 
            <span className="border"></span> 
          </div> 
          <div> 
            <span className="i i7 more" style={{backgroundImage: `url(${navImg})`}}></span><br/>
            <Link to="category" className="txt">更多分类</Link> 
          </div> 
        </div>
      </section>
    )
  }
}

export default AppNav
