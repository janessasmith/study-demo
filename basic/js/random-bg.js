//randomizer.Generate random numbers��
rnd.today=new Date();
rnd.seed=rnd.today.getTime();
function rnd() {
	rnd.seed = (rnd.seed*9301+49297) % 233280;
	return rnd.seed/(233280.0);
};
function rand(number) {
	return Math.ceil(rnd()*number);
};

//Change header image by radomized numbers
var n=rand(3);//ʵ��������һ��0-3�������
if(n==0){//�жϲ������������Ȼ��������ɡ�
	document.getElementById("body1").style.backgroundImage="url(images/bg.jpg)";
}
else if (n==1){
	document.getElementById("body1").style.backgroundImage="url(images/bg_hero4.jpg)";
}else if (n==2){
	document.getElementById("body1").style.backgroundImage="url(images/bg_hero.jpg)";
}else if (n==3){
	document.getElementById("body1").style.backgroundImage="url(images/road_through_1280x800.jpg)";
};