let regex = /[\.\/+]/g;

function findDomain(string) {
    let urlParts = string.split(regex);
    console.log(urlParts);
    let filteredParts = urlParts.filter(parts => {
        return parts.split('').every(char => char.match(/[A-Za-z]/g));
    });
    console.log(filteredParts);
}

findDomain('http://www.google.com');
findDomain('https://www.youtube.com');
findDomain('www.yahoo.com.jp');
findDomain('google.com');


