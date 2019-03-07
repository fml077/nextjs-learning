import Layout from '../components/layout/mainLayout'
import Link from 'next/link'

const PostLink = (props) => (
  <li>
      <Link as={`p/${props.id}`} href={`/post?title=${props.title}`}>
          <a>{props.title}</a>
      </Link>
  </li>
)

export default () => (
  <Layout>
      <h1>My blog</h1>
      <ul>
          <PostLink id='hello-nextjs' title='Hello next.js'/>
          <PostLink id='learn-nextjs' title='Learn next.js'/>
          <PostLink id='deploy-nextjs' title='Deploy app with me'/>
      </ul>
  </Layout>
)