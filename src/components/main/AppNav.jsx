import React, { Component } from 'react'

class AppNav extends Component {
  constructor () {
    super()
  }
  render () {
    return (
      <section className="list-category-5">
        <div className="row"> 
          <a href="javascript:;"> 
            <span className="i i0 lpg"></span><br/>
            <span className="txt">良品购</span> 
            <span className="border"></span> 
          </a> 
          <a href="javascript:;"> 
            <span className="i i1 tmh"></span><br/>
            <span className="txt">商店</span> 
            <span className="border"></span> 
          </a> 
          <a href="javascript:;"> 
            <span className="i i2 mscp"></span><br/>
            <span className="txt">美食菜谱</span> 
            <span className="border"></span> 
          </a> 
          <a href="javascript:;"> 
            <span className="i i3 jjsh"></span><br/>
            <span className="txt">家居生活</span> 
          </a> 
        </div> 
        <div className="row"> 
          <a href="javascript:;"> 
            <span className="i i4 bz"></span><br/>
            <span className="txt">壁纸</span> 
            <span className="border"></span> 
          </a> 
          <a href="javascript:;"> 
            <span className="i i5 tx"></span><br/>
            <span className="txt">头像</span> 
            <span className="border"></span> 
          </a> 
          <a href="javascript:;"> 
            <span className="i i6 bq"></span><br/>
            <span className="txt">表情</span> 
            <span className="border"></span> 
          </a> 
          <a href="javascript:;"> 
            <span className="i i7 more"></span><br/>
            <span className="txt">更多分类</span> 
          </a> 
        </div>
        </section>
    )
  }
}

export default AppNav
