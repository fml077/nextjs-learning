import { withRouter } from 'next/router'
import Layout from '../components/layout/mainLayout'
import fetch from 'isomorphic-unfetch'

const Post = (props) => (
  <Layout>
      <h1>{props.show.name}</h1>
      <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
      <img src={props.show.image.medium}/>
  </Layout>
)

Post.getInitialProps = async function (context) {
    console.log('context:', context)
    const { id } = context.query
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
    const show = await res.json()

    console.log(`fetched show: ${show.name}`)

    return { show }
}

export default Post
// const Page = withRouter((props) => (
//   <Layout>
//       <h1>{props.router.query.title}</h1>
//       <p>This is the blog post content</p>
//   </Layout>
// ))

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

// export default Page
