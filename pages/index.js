import Layout from '../components/layout/mainLayout'
import Link from 'next/link'

const PostLink = (props) => (
  <li>
      <Link href={`/post?title=${props.title}`}>
          <a>{props.title}</a>
      </Link>
  </li>
)

export default () => (
  <Layout>
      <h1>My blog</h1>
      <ul>
          <PostLink title='Hello next.js'/>
          <PostLink title='Learn next.js'/>
          <PostLink title='Deploy app with me'/>
      </ul>
  </Layout>
)