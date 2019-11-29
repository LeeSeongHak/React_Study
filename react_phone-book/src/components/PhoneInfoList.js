import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    static defaultProps = {
        data: [],
        onRemove: () => console.warn('onRemove not defined'),
        onUpdate: () => console.warn('onUpdate not defined')
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.data !== this.props.data;
    }

    render() {
        const { data, onRemove, onUpdate } = this.props;
        const list = data.map(
            //key 는 리액트에서 배열을 렌더링을 할 때 꼭 필요한 값. key가 있으면 리액트는 업데이트시 더 효율적으로 처리할 수 있게 된다.
            info => (
                <PhoneInfo
                    key={info.id}
                    info={info}
                    onRemove={onRemove}
                    onUpdate={onUpdate}
                />)
        );

        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;