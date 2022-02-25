
const PI = "3.14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214808651328230664709384460955058223172535940812848111745028410270193852110555964462294895493038196442881097566593344612847564823378678316527120190914564856692346034861045432664821339360726024914127372458700660631558817488152092096282925409171536436789259036001133053054882046652138414695194151160943305727036575959195309218611738193261179310511854807446237996274956735188575272489122793818301194912";
const Golden_ratio = "1.61803398874989484820458683436563811772030917980576286213544862270526046281890244970720720418939113748475408807538689175212663386222353693179318006076672635443338908659593958290563832266131992829026788067520876689250171169620703222104321626954862629631361443814975870122034080588795445474924618569536486444924104432077134494704956584678850987433944221254487706647809158846074998871240076521705751797883416625624940758906970400028121042762177111777805315317141011704666599146697987317613560067087480710";
const Eulers_number = "2.71828182845904523536028747135266249775724709369995957496696762772407663035354759457138217852516642742746639193200305992181741359662904357290033429526059563073813232862794349076323382988075319525101901157383418793070215408914993488416750924476146066808226480016847741185374234544243710753907774499206955170276183860626133138458300075204493382656029760673711320070932870912744374704723069697720931014169283681902551510865746377211125238978442505695369677078544996996794686445490598793163688923009879312";
const Pythagoras_constant = "1.41421356237309504880168872420969807856967187537694807317667973799073247846210703885038753432764157273501384623091229702492483605585073721264412149709993583141322266592750559275579995050115278206057147010955997160597027453459686201472851741864088919860955232923048430871432145083976260362799525140798968725339654633180882964062061525835239505474575028775996172983557522033753185701135437460340849884716038689997069900481503054402779031645424782306849293691862158057846311159666871301301561856898723723"
const Theodorus_constant = "1.7320508075688772935274463415058723669428052538103806280558069794519330169088000370811461867572485756"
const Euler_Mascheroni_constant = "0.5772156649015328606065120900824024310421593359399235988057672348848677267776646709369470632917467495";
const Meissel_Mertens_constant = "0.2614972128476427837554268386086958590516";
const Omega_constant = "0.5671432904097838729999686622103555497538157871865125081351310792230457930866";
const Hafner_Sarnak_McCurley_constant = "0.3532363718549959845435165504326820112801647785666904464160859428";
const Catalans_constant = "0.91596559417721901505460351493238411077414937428167213426649811962176301977";
const Conways_constant = "1.303577269034296391257099112152551890730702504659404875754861390628550";
const Plastic_constant = "1.324717957244746025960908854";
const Fransén_Robinson_constant = "2.807770242028519365221501186557772932308085920930198291220054809597100";
const Reciprocal_Fibonacci_constant = "3.35988566624317755317201130291892717968890513373";


let positionCounter = 2;
let currentConstantName = "";
let currentConstant = "";
let currentGuessConstat = "";

let constantsObj = { 'PI': PI, 'Golden_ratio': Golden_ratio, 'Eulers_number': Eulers_number, 'Pythagoras_constant': Pythagoras_constant, 'Theodorus_constant': Theodorus_constant, 'Euler_Mascheroni_constant': Euler_Mascheroni_constant, 'Meissel_Mertens_constant': Meissel_Mertens_constant, 'Omega_constant': Omega_constant, 'Hafner_Sarnak_McCurley_constant': Hafner_Sarnak_McCurley_constant, 'Catalans_constant': Catalans_constant, 'Conways_constant': Conways_constant, 'Plastic_constant': Plastic_constant, 'Fransén_Robinson_constant': Fransén_Robinson_constant, 'Reciprocal_Fibonacci_constant': Reciprocal_Fibonacci_constant };
let constantsLearnMoreObj = {'PI':'A000796', 'Golden_ratio':'A001622', 'Eulers_number':'A001113', 'Pythagoras_constant':'A002193', 'Theodorus_constant':'A002194', 'Euler_Mascheroni_constant':'A001620', 'Meissel_Mertens_constant':'A077761', 'Omega_constant':'A030178', 'Hafner_Sarnak_McCurley_constant':'A085849', 'Catalans_constant':'A006752', 'Conways_constant':'A014715', 'Plastic_constant':'A072117', 'Fransén_Robinson_constant':'A046943', 'Reciprocal_Fibonacci_constant':'A079586'};

function getconstant(constantName) {

    // change scene to memorizer

    document.querySelector(".constantsGrid").classList.add("notVisible");
    document.querySelector(".numberPadGrid").classList.remove("notVisible");

    document.querySelector(".hiddenPage").classList.remove("notVisible");


    document.querySelector("#symbol").innerHTML = constantName;


    positionCounter = 2;
    currentConstantName = constantName;
    currentConstant = constantsObj[constantName];
    currentGuessConstat = constantsObj[constantName][0] + constantsObj[constantName][1];
    document.getElementById("digits").innerHTML = currentGuessConstat;
    updateCounter();
}

function backToMenu() {
    location.reload();
}

function playAgain() {
    document.querySelector(".numberPadGrid").classList.remove("notVisible");
    document.querySelector(".playagain").classList.add("notVisible");
    document.querySelector(".backToMenu").classList.add("notVisible");
    document.querySelector(".showConstant").classList.add("notVisible");
    document.querySelector(".learnMore").classList.add("notVisible");
    getconstant(currentConstantName);
}


function addDigit(digit) {

    if (digit == currentConstant[positionCounter]) {
        currentGuessConstat += digit;
        positionCounter++;
        if (currentGuessConstat.length > 15) {
            console.log("scroll");
            document.getElementById("digits").innerHTML = currentGuessConstat.slice(currentGuessConstat.length - 15, currentGuessConstat.length);
        } else {
            document.getElementById("digits").innerHTML = currentGuessConstat;
        }


    } else {
        document.getElementById("digits").innerHTML = "entered:" + digit + " expected:" + currentConstant[positionCounter];        
        document.querySelector(".numberPadGrid").classList.add("notVisible");
        document.querySelector(".playagain").classList.remove("notVisible");
        document.querySelector(".backToMenu").classList.remove("notVisible");
        document.querySelector(".showConstant").classList.remove("notVisible");
        document.querySelector(".learnMore").classList.remove("notVisible");

    }

    updateCounter();
}


function showConstant() {
    document.querySelector(".displayConstant").innerHTML += currentConstant.split("").join(" ");
    document.querySelector(".hiddenPage").classList.add("notVisible");
    document.querySelector(".displayConstant").classList.remove("notVisible");
    
}


function updateCounter() {
    document.querySelector("#counter").innerHTML = positionCounter - 2;
}

function learnMore() {
    window.open("https://oeis.org/" + constantsLearnMoreObj[currentConstantName], "_blank");
}