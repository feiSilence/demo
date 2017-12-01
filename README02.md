# vue-router-study

commit_01
router-link声明式导航，会自动监听该标签，router-vier路由视窗，匹配路径对应组件；
<router-link :to="{path:'/document#abc'}" event="click" active-class="activeClass">document</router-link>，被激活导航类名设置(全局与局部，设置导航样式)，exact(路径精确匹配模式，不包含根路径)，/document#abc根据hash值定位组件中id为abc的元素(VueRouter实例需要配置)
router-view设置class(匹配到路径对应组件根节点元素，从而设置视图组件样式)，router-view设置name(路径包含多个组件，渲染对应name的组件到视窗)

在about路由配置了它的children，这就是嵌套路由，router-view视窗在about单页面组件中

<router-link :to="{path:'/user/'+item.tip+'/'+item.id,query:{info:'follow'}}">{{item.userName}}</router-link>
path: '/user/:tip?/:userId?'动态路由设置，通过this.$route当前被激活路由对象信息，获取动态路由路径id
query:{info:'follow'}路径?后面  // http://localhost:8080/user/vip/1?info=follow
	data(){
	    return {
	        userList: data,
	        userInfo: {}
	    }
	},
	watch:{
	  $route(){
	    // 路径发生变化，$route会重新赋值，监控了这个属性，会执行这个函数
	    this.getData()
	  }
	},
	created(){
	  // 渲染这个组件会调用一次这个生命周期函数  // 复用这个组件，这个函数不会再次被调用了
	  // 地址一旦发生变化，$route会重新生成一个路由信息对象
	  this.getData()
	},
	methods:{
	    getData(){  //this.$route当前被激活路由对象信息，获取动态路由路径id
	      let id = this.$route.params.userId;
	      //过滤数据，将激活路由对应id的数据对象赋值给userInfo
	      if( id ){
	        this.userInfo = this.userList.filter((item)=>{
	          return item.id == id
	        })[0]
	      }else{
	        this.userInfo = {};
	      }
	      console.log(this.$route)
	    }
     }

