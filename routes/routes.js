exports.home = (req,res)=>{
    res.render('home',{
        title:'Home',
        headline:'We believe that every city has something to say'
    })
}

exports.city = (req,res)=>{
    var headline = '';
    var cityName = req.params.city;
    switch(cityName){
        case 'delhi':
            headline = '"I asked my soul: What is Delhi? She Replied: The world is the body & Delhi its soul"';
            break;
        case 'mumbai':
            headline = '"More dreams are realised and extinguished in Mumbai than any other place in India"';
            break;
        case 'kolkata':
            headline = '"Kolkata is not a city but an emotion"';
            break;
    }
    
    res.render('city',{
        title:cityName,
        city: cityName,
        headline : headline
    })
}