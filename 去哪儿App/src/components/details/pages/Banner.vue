<template>
  <div class="banner">
    <div class="banner_header" v-if="ShowHeader"  :style="styleOpacity">
      <router-link to="/"><span class="iconfont">&#xe642;</span></router-link>华清宫
    </div>
    <div class="top">
      <router-link to="/DetailsImg">
        <div class="img">
          <img src="http://img1.qunarzz.com/sight/p0/1602/53/53cf6caed9f9b9ee90.img.jpg_600x330_ddcee9e0.jpg" alt="">
          <router-link to="/">
            <div class="span">
              <span class="iconfont">&#xe642;</span>
            </div>
          </router-link>
          <div class="imgnum">
            <i class="iconfont">&#xe6dd;</i>43
          </div>
          <div class="top_bottom">
            <h3>华清宫(AAAAA景区)</h3>
            <div class="right">
              <h4>视频</h4>
              <i class="iconfont" style="font-size: .25rem">&#xe641;</i>
            </div>
          </div>
        </div>
      </router-link>
    </div>
    <div class="content">
      <div class="info">
        <div class="left">
          <div class="nice">
            <h2>4.9</h2>分
            <span>很棒</span>
          </div>
          <div>
            <span>37741条评论</span>
            <span>12条攻略</span>
          </div>
          <i class="iconfont">&#xe62e;</i>
        </div>
        <div class="right">
          <h3>景点简介</h3>
          <p>开放时间、贴士</p>
          <i class="iconfont">&#xe641;</i>
        </div>
      </div>
      <div class="bottom">
        <i class="iconfont">&#xe618;</i>
        <p>陕西省西安市临潼区华清路038号</p>
        <i class="iconfont">&#xe641;</i>
      </div>
    </div>
    <div class="gowhereA">
      <h2><i class="where"></i>去哪儿推荐</h2>
      <ul>
        <li>
          <div class="left">
            <h3>华清宫成人门票 景区官方直营</h3>
              <div class="img">
                <img src="https://img1.qunarzz.com/piao/fusion/1804/25/792e9929973a9902.png" alt="">
              </div>
            <span>可订明日</span>
            <p><i>随时退</i></p>
          </div>
          <div class="right">
            <h3><b>￥</b>108</h3>
            <p>预定</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      ShowHeader:false,
      styleOpacity:{
        opacity:0
      }
    }
  },
  mounted(){
    window.addEventListener("scroll",()=>{
      let top=document.documentElement.scrollTop;
      if(top>6){
        let opacity=(this.styleOpacity.opacity+=0.04);
        if(opacity>1){
          opacity=1;
          this.ShowHeader=true;
        }

      }else if(top=6){
        this.ShowHeader=false;
      }

    })
  }
}
</script>
<style lang="stylus">
  @import '~css/var.styl'
  .where{
    background-image :url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAflBMVEUAAAD/bm7/b2//b2//eXn/b2//b2//bm7/b2//b2//bm7/b2//b2//b2//bm7/b2//b2//cXH/eHj/qqr/bm7/////cXH/iIj/oqL//f3/mJj/fHz/9/f/8PD/4eH/ycn/6+v/1dX/0ND/t7f/ra3/kpL/jo7/c3P/5ub/vr7o37bEAAAAFHRSTlMA9uZeCfny7NvLt6+PfGZONxsRA/pz1k8AAAFrSURBVEjHpZbZdoMwDERtMEvYE8YJZN/b/v8PNvicJsiYqJzcB548WGNZksUAVWZJHAVBFCdZqQTDwk8lesjUX4hxVB5iQJiPbVMXHpx4RS0czGcYZTYXAyoPb/AqYeFLvEX61nqwEEUlwSKrnl9X/JtmZfl4Oq9d53Pfan2yzurvdAs42OsHaxAKYVDOA207wcEKShlBDhfaIUBu7lsIl2UjuIASLkZTsDaCxpWMFC7ORrCBRfqw7MxZY9Z/w0YqUWLI8tLqJ+25n8BSZP3Am+aG2/Vw1IQ9XmQiwZNV9z+0mkKtJCKmAg094IgXsYg4Ab0gkQh4wRUvgv8I1kTAh7QHCYk3fQIxnbCCHXokImMFPyCJKznB9gvkaijJ7XCnl0+kU3ZISQFttp3DnWW5oQVES3S57D4Eq0RJE+DJSZvh8RRpZDwFaZU8s5o0YxZvPrXdTx0on40sfih+Nnb5wT7x6fDR42Ty8+cXnHyOvDgQEbUAAAAASUVORK5CYII=')
    background-repeat: no-repeat;
    background-size: .18rem .18rem;
    background-position: 0 center;
    text-indent: .18rem;
    width :.18rem;
    display block;
    height:.18rem;
    float :left;
    position:relative;
    top :.13rem
  }
  .banner .banner_header{
    position: fixed;
    top: 0;
    line-height: .44rem;
    height: .44rem;
    font-size:.16rem;
    background-color:$bgcolor;
    z-index: 30;
    color :#fff;
    width: 100%;
    text-align: center;
  }
  .banner .banner_header span{
    float: left;
    color :#fff;
    padding-left :.1rem;
  }
  .banner{
    overflow: hidden;
  }
  .banner .top .span{
    position: relative;
  }
  .banner .top .span>span{
    margin-top: -0.1rem;
    position: absolute;
    top: -0.08rem;
    left:0.08rem
  }
  .gowhereA{
    padding-left: .1rem;
    padding-right: .1rem;
    background-color: #fff;
  }
  .gowhereA h2{
    position relative
    font-size: 0.16rem;
    line-height: 0.44rem;
    border-bottom: 1px solid #ddd;
    font-weight: normal;
  }
  .gowhereA h2 i{
    color:red;
    padding-right: 0.1rem;
  }
  .gowhereA li{
    border-bottom:1px solid #ddd;
    overflow:hidden;
  }
  .gowhereA .left{
    float: left;
    font-size: 0.15rem;
    line-height: 0.22rem;
    padding: 0.1rem 0;
  }
  .gowhereA .left .img{
    display: inline-block;
  }
  .gowhereA .left .img img{
    display: inline-block;
    width: 0.1rem;
    height: 0.11rem;
  }
  .gowhereA .left  span{
    display: inline-block;
  }
  .gowhereA .left i{
    color: #00afc7;
    font-size: .1rem;
    line-height: .16rem;
  }
  .gowhereA .right{
    float:right;
    font-size: 0.2rem;
    color: #ff9800;
    text-align: center;
    margin-top: 0.1rem;
  }
  .gowhereA .right b{
    font-size: 0.14rem;
  }
  .gowhereA .right p{
    padding:0.07rem 0.25rem;
    color: #fff;
    background: #ff9800;
    font-size: 0.14rem;
    border-radius: 0.05rem;
  }
  .banner .top{
    position: relative;
  }
  .banner .top .img{
    overflow: hidden;
    height: 0;
    width: 100%;
    padding-bottom: 55%;
  }
  .banner .top .span{
    position: absolute;
    left: .05rem;
    top: .05rem;
    width: .36rem;
    height: .36rem;
    line-height: .36rem;
    background-color: #666;
    border-radius: 50%;
  }
  .banner .top span{
    line-height: .72rem;
    text-align: left;
    font-size: .18rem;
    color:#fff;
  }
  .banner .top .imgnum{
    position: absolute;
    left:0.2rem;
    bottom:0.4rem;
    font-size: 0.12rem;
    color:#fff;
    width: 0.6rem;
    height: .2rem;
    background: rgba(0,0,0,.5);
    border-radius :.1rem;
  }
  .banner .top .imgnum i{
    padding-right: 0.07rem;
    padding-left :.05rem;
  }
  .top_bottom{
    position: absolute;
    left:0.15rem;
    bottom:0.1rem;
    font-size: 0.18rem;
    color:#fff;
    width: 100%;
    text-shadow: 0 1px 2px rgba(0,0,0,0.70);
  }
  .top_bottom h3{
    float: left;
  }
  .top_bottom .right{
    float: right;
    margin-right: 0.25rem;
  }
  .top_bottom .right h4{
    display: inline-block;
  }
  .top_bottom .right i{
    display: inline-block;
  }
  .content .info{
    width: 100%;
    font-size: .12rem;
    color: #9e9e9e;
    line-height: .19rem;
    overflow:hidden;
  }
  .content .info .left{
    width: 50%;
    border-right: 1px solid #ddd;
    box-sizing: border-box;
    float:left;
    position: relative;
    padding-left: 0.1rem;
    padding-top: 0.1rem;
  }
  .content .info .left .nice{
    color: #ff8300;
  }
  .content .info .left .nice h2{
    font-size: .22rem;
    line-height: .22rem;
    display: inline-block;
  }
  .content .info .left .nice span{
    font-size: .14rem;
  }
  .content .info .right{
    width: 50%;
    float:left;
    position: relative;
    padding-left: 0.1rem;
    padding-top: 0.1rem;
    box-sizing: border-box;
  }
  .content .info .right h3{
    color: #212121;
    font-size: .16rem;
  }
  .content .info i{
    position: absolute;
    right:0.1rem;
    top:30%;
  }
  .content .bottom {
    font-size: 0.16rem;
    line-height: 0.15rem;
    padding:0.1rem;
    display: flex;
    color: #212121;
  }
  .content .bottom p{
    display: inline-block;
    text-align: left;
    flex:1;
    margin-left: 0.2rem;
  }
</style>

