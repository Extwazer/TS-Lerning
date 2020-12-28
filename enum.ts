enum Membership {
    Simple,
    Standart,
    Premium
}


const membership = Membership.Premium;
const membershipReverse = Membership[1];

console.log(membership);
console.log(membershipReverse);


enum SocialMedia {
    VK = 'VK',
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM = 'INSTAGRAM'
}

const social = SocialMedia.INSTAGRAM;

console.log(social);