import React, { Component } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import MainContext from '../../context-api/MainContext';
import '../../styles/slideCarousel.scss';
// import NextLink from '../NextLink';

class SlideCarousel extends Component {
    static contextType = MainContext;

    // stopInterval = 0;

    constructor(props){
        super(props);
        this.state = {
            counter : 0,
            listWidth : 0,
            sliderId: this.props.sliderName || "",
            // listWidth: function() {
            //     let lw = null;
            //     if(typeof window !== undefined){
            //         document.getElementById(this.sliderId).offsetWidth 
            //     }
            //     return lw;
            // },
        }
        this.incrementDots = this.incrementDots.bind(this);
    }
    componentDidMount(){ 
        const { sliderId } = this.props;
        this.setState(prev => {
            const el = document.getElementById(sliderId)
            const listWidth = el ? el.offsetWidth : null;
            return({ listWidth })
        });  
    }
    incrementDots(count){
        const { counter } = this.state;
        this.setState({
            counter: Math.max((counter + Number(count)), 0)
        })
    }

    render(){
        const { children, numbSlides,  slideWidth, sliderId} = this.props;
        const { counter, listWidth } = this.state;
        // const { state: { slidePaused, testimonials } } = this.context;
        const slideToShow = Math.round(listWidth / slideWidth);
        const width = slideWidth * numbSlides;
        const translate = slideWidth * Math.max(counter, 0);
        const currentTranslate = width - translate;
        const translateState = listWidth <= currentTranslate;
        const toTranslate =  translateState ? translate : ((width + 10 ) - listWidth );
        const style = {
            sl_list: {

            },
            sl_track: {
                width: `${ slideWidth * numbSlides }px`,
                transform: `translateX(-${ toTranslate }px)`,
                // transform: `translateX(-${ slideWidth * Math.max(counter, 0)}px)`,
                // transform: `translateX(-${((100 * (Math.min(counter, (numbSlides - 1)))) / numbSlides)}%)`,
                transition: "transform 0.3s ease-in-out"
            },
        };
        return(
            <div className="SlideCarousel">
                {/* <div className="ts-header">
                    <h2> <span>{ title || "" }</span> </h2> 
                </div> */}
                <div className="sc-inner">
                    <div className="slides-list" style={ style.sl_list } id={ sliderId || "sliderId"}>
                        <div className="slides-track" style={ style.sl_track }>
                            { children }
                        </div>
                    </div>
                    <div className="slides-actions">
                        <div className="sa-btn sa-btn-action sa-prev"
                            onClick={() => this.incrementDots(counter === 0 ? 0 : -1)}>
                            <MdKeyboardArrowLeft />
                        </div>
                        {/* <div className="sa-btn sa-link">
                            <NextLink link={`/articles/${link || "#"}`} >Voir plus</NextLink>
                        </div> */}
                        <div className="sa-btn sa-btn-action sa-next"
                            onClick={() => this.incrementDots(
                                ((counter + 1) === numbSlides) ||  (counter === (numbSlides - slideToShow )) ? 0 : 1)
                                // ((counter + 1) === numbSlides) &&  (counter === (numbSlides - slideToShow )) ? 0 : 1)
                            }
                        >
                            <MdKeyboardArrowRight />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SlideCarousel;
