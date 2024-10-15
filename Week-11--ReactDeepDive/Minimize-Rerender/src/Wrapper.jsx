function Card(){
    return <div>
        <CardWrapper>
        <CardWrapper>
            <TextComponent/>
        </CardWrapper>
        </CardWrapper>
        <CardWrapper>
            <div>
                Hi there , this is div inside the card wrapper.
            </div>
        </CardWrapper>
    </div>
}

function CardWrapper({children}){
    return <div style={{border: "2px solid white" , padding:20}}>
        {children}
    </div>
}

function TextComponent(){
    return <div>
        Hi there , this is div from text component.
    </div>
}

export default Card