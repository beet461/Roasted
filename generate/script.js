const lvl4_raw = `You bring everyone so much joy when you leave the room.
I'd give you a nasty look but you've already got one.
Someday you’ll go far. I hope you stay there.
Were you born this stupid or did you take lessons?
Your mouth is bigger than your brain will ever be
You should really come with a warning label.
I don’t know what your problem is, but I’m guessing it’s hard to pronounce.
It’s kind of hilarious watching you try to fit your entire vocabulary into one sentence.
I will ignore you so hard you will start doubting your existence.
Feed your own ego. I’m busy.
I’ll never forget the first time we met. But I’ll keep trying.
You’re a grey sprinkle on a rainbow cupcake.
I thought of you today. It reminded me to take out the trash.
Stupidity isn’t a crime, so you’re free to go.
I’ve been called worse by better.
Don’t you get tired of putting makeup on your two faces every morning?
Please just tell me you don’t plan to home-school your kids.
You see that door? I want you on the other side of it.
You’re like the end pieces of a loaf of bread. Everyone touches you, but nobody wants you.
You are more disappointing than an unsalted pretzel.
Your face makes onions cry.
You’re not stupid! You just have bad luck when you’re thinking.
Have a nice day, somewhere else.
If ignorance is bliss, you must be the happiest person on the planet.
If I threw a stick, you’d leave, right?
Somewhere out there, there’s a tree working very hard to produce oxygen so that you can breathe. I think you should go and apologize to it.`;

const lvl3_raw = `Don’t get bitter, just get better.
What doesn’t kill you, disappoints me.
Aww, it’s so cute when you try to talk about things you don’t understand.
Hey, your village called – they want their idiot back.
Calling you an idiot would be an insult to all stupid people.
I am returning your nose. I found it in my business.
Good story, but in what chapter do you shut up?
There are some remarkably dumb people in this world. Thanks for helping me understand that.
You need a kiss on the neck from a crocodile.
May both sides of your pillow be uncomfortably warm.`;

const lvl2_raw = `You are like a cloud. When you disappear it’s a beautiful day.
Child, I’ve forgotten more than you ever knew.
I’ve seen people like you before, but I had to pay admission.
I was hoping for a battle of wits but you appear to be unarmed.
I’ve been called worse by better.
Jealousy is a disease. Get well soon.
I could eat a bowl of alphabet soup and poop out a smarter statement than whatever you just said.
People like you are the reason I’m on medication.
Earth is full. Go home.
Who ate your bowl of sunshine this morning, thundercloud?
You fear success, but you really have nothing to worry about.
Keep rolling your eyes, you might eventually find a brain.
If your brain was dynamite, there wouldn’t be enough to blow your hat off.
Your only purpose in life is to become an organ donor.
You are proof that evolution can go in reverse.
Grab a straw, because you suck.
Remember when I asked for your opinion? Me neither.
You’re about as useful as a screen door on a submarine.
I believed in evolution until I met you.
That sounds like a you problem.
Unless your name is Google, stop acting like you know everything!
I told my therapist about you.`;

const lvl1_raw = `bad
go away
weakling
unintelligent
stupid
disrespectful`;

const lvl4 = lvl4_raw.split('\n');
const lvl3 = lvl3_raw.split('\n');
const lvl2 = lvl2_raw.split('\n');
const lvl1 = lvl1_raw.split('\n');

function position() {
    var page = document.documentElement;
    var cbCont = document.getElementById('cb-cont');
    cbCont.style.position = 'absolute';
    cbCont.style.left = `${page.clientWidth / 2 - 500}px`;
    cbCont.style.top = `${page.clientHeight / 2 - 100}px`;
}
position();

function generate() {
    var lvl = Math.ceil(Math.random() * 4);
    var cb = document.getElementById('cb');
    switch (lvl) {
        case 1:
            cb.innerHTML = lvl1[Math.floor(Math.random() * lvl1.length)];
            document.getElementById('cb-lvl').innerHTML = 'Level: weak';
            break;
        case 2:
            cb.innerHTML = lvl2[Math.floor(Math.random() * lvl2.length)];
            document.getElementById('cb-lvl').innerHTML = 'Level: Witty';
            break;
        case 3:
            cb.innerHTML = lvl3[Math.floor(Math.random() * lvl3.length)];
            document.getElementById('cb-lvl').innerHTML = 'Level: Amazing';
            break;
        case 4:
            cb.innerHTML = lvl4[Math.floor(Math.random() * lvl4.length)];
            document.getElementById('cb-lvl').innerHTML = 'Level: EPIC';
            break;
    }
}

function another() {
    document.getElementById('cb-lvl').innerHTML = 'Generating Comeback...';
    document.getElementById('cb').innerHTML = '';
    setTimeout(function () {
        document.getElementById('cb-lvl').innerHTML = '';
        generate();
    }, 1000);
}

setTimeout(function () {
    document.getElementById('cb-lvl').innerHTML = '';
    generate();
}, 1000);
