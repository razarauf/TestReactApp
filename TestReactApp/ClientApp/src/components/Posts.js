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
            <p>This component demonstrates fetching data from the server that's in the db.</p>
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
                    </tr>
                </thead>
                <tbody>
                    {posts.map(forecast =>
                        <tr key={forecast.postId}>
                            <td>{forecast.title}</td>
                            <td>{forecast.content}</td>
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
