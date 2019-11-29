import React from 'react';

const Post = ({location, match}) => {
    return (
        <div>
            <h4>location.pathname:{location.pathname}</h4>
            <h4>match.path:{match.path}</h4>
            <h4>match.url:{match.url}</h4>
            포스트 {match.params.id}
            
        </div>
    );
};

export default Post;