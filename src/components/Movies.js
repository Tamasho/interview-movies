import React from 'react';
import Movie from './Movie';
import '../App.scss';

export default function Movies(props){
    
    // const [visible, setVisible] = React.useState(3)

    const visible = props.visible;

    const movies = props.movies.slice(0, visible).map(data => {
        return(
            <Movie 
                key={data.show.id}
                url={data.show.url}
                image={data.show.image}
                name={data.show.name}
                summary={data.show.summary}
            />
        )
    })

    return(
        <div className="container">
            <div className="row row-cols-3">
                {movies}
            </div>        
        </div>
    )
}