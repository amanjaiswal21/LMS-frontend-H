function CarouselSlide({image,title,description,slideNumber,totalSlides}){
return (
    <div id={`slide${slideNumber}`} className="relative w-full carousel-item">
    <div className='flex flex-col items-center justify-center gap-4 px-[15%]'>
        <img src={image} className="w-40 border-2 border-gray-400 rounded-full" alt="APJ Abdul Kalam" />
        <p className='text-2xl text-center text-gray-200'>
           {description}
        </p>
        <h3 className="text-2xl font-semibold">{title}</h3>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href={`#slide${(slideNumber==1? totalSlides:(slideNumber-1))}`} className="btn btn-circle">❮</a>
            <a href={`#slide${(slideNumber)%totalSlides+1}`} className="btn btn-circle">❯</a>
        </div>
    </div>
</div>
)
}
export default CarouselSlide;