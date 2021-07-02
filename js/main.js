let boxNumber = 5
let boxColor = [ '#C20CED', '#0560FA', '#00E061', '#F9FA00', '#ED870C' ]
let visu = document.querySelector( '#visu' )
let visuWidth = document.querySelector( '#visu-width' )
let itemWidth = document.querySelector( '#item-width' )
let itemHeight = document.querySelector( '#item-height' )
let nbrOfItem = document.querySelector( '#nbr-of-item' )

let display = () =>
{
    visu.innerHTML = ''
    for ( let i = 0; i < boxNumber; i++ ) {
        let item = document.createElement( 'div' )
        item.classList.add( 'item' )
        item.style.background = boxColor[ i % 5 ]
        item.innerHTML = '<p>' + i + '</p>'
        visu.appendChild( item )
    }
}

display()

visuWidthChange = () =>
{
    visuWidth.innerHTML = document.querySelector( '#width-visu-input' ).value
    visu.style.height = document.querySelector( '#width-visu-input' ).value + 'px'
}

itemNumberChange = () =>
{
    nbrOfItem.innerHTML = document.querySelector( '#nbr-item' ).value
    boxNumber = document.querySelector( '#nbr-item' ).value
    display()
}

itemWidthChange = () =>
{
    itemWidth.innerHTML = document.querySelector( '#width' ).value
    let items = document.querySelectorAll( '.item' )
    for ( let i = 0; i < boxNumber; i++ ) {
        items[ i ].style.width = document.querySelector( '#width' ).value + 'px'
    }
}

itemHeightChange = () =>
{
    itemHeight.innerHTML = document.querySelector( '#height' ).value
    let items = document.querySelectorAll( '.item' )
    for ( let i = 0; i < boxNumber; i++ ) {
        items[ i ].style.height = document.querySelector( '#height' ).value + 'px'
    }
}

flexDirection = ( direction ) =>
{
    visu.style.flexDirection = direction
}

flexWrap = ( wrap ) =>
{
    visu.style.flexWrap = wrap
}

justifyContent = ( type ) =>
{
    visu.style.justifyContent = type
}

alignItems = ( type ) =>
{
    visu.style.alignItems = type
}

alignContent = ( type ) =>
{
    visu.style.alignContent = type
}

br = () =>
{
    return '<br>'
}
marge = () =>
{
    return '&nbsp&nbsp&nbsp&nbsp'
}

genererCode = () =>
{
    let div = document.querySelector( '#code > div' )
    div.innerHTML = 'Normal<br>'
    div.innerHTML += 'element.style {' + br()
    div.innerHTML += marge() + 'display: flex;' + br()
    if ( visu.style.flexDirection != '' && visu.style.flexDirection != 'row' )
        div.innerHTML += marge() + 'flex-direction: ' + visu.style.flexDirection + ';' + br()
    if ( visu.style.flexWrap != '' && visu.style.flexWrap != 'nowrap' )
        div.innerHTML += marge() + 'flex-wrap: ' + visu.style.flexWrap + ';' + br()
    if ( visu.style.justifyContent != '' && visu.style.justifyContent != 'flex-start' )
        div.innerHTML += marge() + 'justify-content: ' + visu.style.justifyContent + ';' + br()
    if ( visu.style.alignItems != '' && visu.style.alignItems != 'stretch' )
        div.innerHTML += marge() + 'align-items: ' + visu.style.alignItems + ';' + br()
    if ( visu.style.alignContent != '' && visu.style.alignContent != 'normal' )
        div.innerHTML += marge() + 'align-content: ' + visu.style.alignContent + ';' + br()
    div.innerHTML += '}'

    if ( ( visu.style.flexDirection == '' || visu.style.flexDirection == 'row' )
        || ( visu.style.flexWrap == '' | visu.style.flexWrap == 'nowrap' )
        || ( visu.style.justifyContent == '' | visu.style.justifyContent == 'flex-start' )
        || ( visu.style.alignItems == '' | visu.style.alignItems == 'stretch' )
        || ( visu.style.alignContent == '' | visu.style.alignContent == 'normal' ) ) {
        div.innerHTML += '<br><br>Étendu<br>'
        div.innerHTML += 'element.style {' + br()
        div.innerHTML += marge() + 'display: flex;' + br()
        if ( visu.style.flexDirection != '' && visu.style.flexDirection != 'row' )
            div.innerHTML += marge() + 'flex-direction: ' + visu.style.flexDirection + ';' + br()
        else
            div.innerHTML += marge() + 'flex-direction: row' + br()
        if ( visu.style.flexWrap != '' && visu.style.flexWrap != 'nowrap' )
            div.innerHTML += marge() + 'flex-wrap: ' + visu.style.flexWrap + ';' + br()
        else
            div.innerHTML += marge() + 'flex-wrap: nowrap;' + br()
        if ( visu.style.justifyContent != '' && visu.style.justifyContent != 'flex-start' )
            div.innerHTML += marge() + 'justify-content: ' + visu.style.justifyContent + ';' + br()
        else
            div.innerHTML += marge() + 'justify-content: flex-start;' + br()
        if ( visu.style.alignItems != '' && visu.style.alignItems != 'stretch' )
            div.innerHTML += marge() + 'align-items: ' + visu.style.alignItems + ';' + br()
        else
            div.innerHTML += marge() + 'align-items: stretch;' + br()
        if ( visu.style.alignContent != '' && visu.style.alignContent != 'normal' )
            div.innerHTML += marge() + 'align-content: ' + visu.style.alignContent + ';' + br()
        else
            div.innerHTML += marge() + 'align-content: normal;' + br()
        div.innerHTML += '}'
    }
}