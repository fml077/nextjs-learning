import Header from '../Header'

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
}
// 公用布局，{props.children}必须有，用于渲染不同页面的主体内容
const Layout = (props) => (
    <div style={layoutStyle}>
        <Header/>
        {props.children}
    </div>
)

export default Layout