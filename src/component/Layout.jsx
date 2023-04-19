import Header from './Header';

//this files only deals with the layout of the whole app
const Layout = (props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};
export default Layout;
