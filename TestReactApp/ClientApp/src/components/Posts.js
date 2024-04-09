import React from 'react';
import authService from './api-authorization/AuthorizeService'

export default function Posts() {
    // the second parameter is a dependancy array
    // empty array means the function will only run once
    React.useEffect(() => {
        populatePostData();
    }, [])

    const [state, setState] = React.useState({ posts: [], loading: true })

    let contents = state.loading
        ? <p><em>Loading...</em></p>
        : renderPostsTable(state.posts);

    return (
        <>
            <h1 id="tableLabel">Posts</h1>
            {contents}
        </>
    );

    function renderPostsTable(posts) {
        return (
            <table className="table table-striped" aria-labelledby="tableLabel">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Body</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post =>
                        <tr key={post.postId}>
                            <td>{post.title}</td>
                            <td>{post.content}</td>
                            <td><a href="">Edit</a></td>
                            <td><button>Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    async function populatePostData() {
        const token = await authService.getAccessToken();
        const response = await fetch('posts', {
            headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        setState({ posts: data, loading: false });
    }
}
