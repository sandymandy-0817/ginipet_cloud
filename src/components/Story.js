import React from 'react';
import '../styles/story.css';

function Story(props) {
    return (
        <section className='story'>
            <img src={`${process.env.PUBLIC_URL}/images/banner_story_icon.png`} className='icon'/>
            <h2>지니펫<span>스토리</span></h2>
            <p>소중한 반려견을 위한<br />지니펫의 다양한 소식을 만나보세요!</p>
            <button>자세히보기</button>
            <img src={`${process.env.PUBLIC_URL}/images/banner_story_img.png`} className='dog'/>
        </section>
    );
}

export default Story;