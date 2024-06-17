export const settingsDefault = {
    dots: false,
    arrows: false,
    rows:2,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: false,
    // variableWidth: true,
    // centerMode:true,
    responsive: [
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
                rows:1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                rows:1,
                variableWidth: true,
                centerMode:true,
                slidesToScroll: 1,
            }
        }
    ]
};


