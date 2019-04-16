import Banner from './Banner';
import TweenOne from 'rc-tween-one';

const { TweenOneGroup } = TweenOne;
class Product extends React.PureComponent {

  render() {
    const { location } = this.props;
    const { pathname } = location;
    const pathKeys = pathname && pathname.split('/');
    return (
      <div>
        <Banner />
        <TweenOneGroup
          className="content-wrapper"
          enter={{ type: 'from', opacity: 0, ease: 'easeOutQuart' }}
          leave={{ opacity: 0, ease: 'easeOutQuart' }}
          ref={(c) => { this.content = c; }}
        >
          {React.cloneElement(this.props.children, { key: pathKeys[2] ? 'detailed' : 'page' })}
        </TweenOneGroup>
      </div>
    );
  }
}

export default Product;
