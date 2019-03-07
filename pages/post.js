import { withRouter } from 'next/router'
import Layout from '../components/layout/mainLayout'

const Page = withRouter((props) => (
  <Layout>
      <h1>{props.router.query.title}</h1>
      <p>This is the blog post content</p>
  </Layout>
))

// 或者下面这种方式 再抽离出来一个Content组件
// const Content = withRouter((props) => (
//   <div>
//       <h1>{props.router.query.title}</h1>
//       <p>This is the blog post content</p>
//   </div>
// ))
// const Page = (props) => (
//   <Layout>
//       <Content/>
//   </Layout>
// )

export default Page
