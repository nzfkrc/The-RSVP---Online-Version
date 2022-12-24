/************** 
 * Rsvp1 Test *
 **************/

import { core, data, sound, util, visual } from './lib/psychojs-2021.2.3.js';
const { PsychoJS } = core;
const { TrialHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'RSVP1';  // from the Builder filename that created this script
let expInfo = {'Ogrenci Numarasi': '', 'Yas': '', 'Cinsiyet': ['Kadin', 'Erkek'], 'Ogrenim Durumu': ['Ilkokul', 'Ortaokul', 'Lise', 'Lisans', 'Yüksek Lisans', 'Doktora']};

// Start code blocks for 'Before Experiment'
add_to_this2 = 1;

add_to_this = 1;

saymasayisi = 0;
saymasayisi2 = 0;

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color('lightgray'),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
const baslangicLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(baslangicLoopBegin(baslangicLoopScheduler));
flowScheduler.add(baslangicLoopScheduler);
flowScheduler.add(baslangicLoopEnd);
const introLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(introLoopBegin(introLoopScheduler));
flowScheduler.add(introLoopScheduler);
flowScheduler.add(introLoopEnd);
const maybepracLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(maybepracLoopBegin(maybepracLoopScheduler));
flowScheduler.add(maybepracLoopScheduler);
flowScheduler.add(maybepracLoopEnd);
flowScheduler.add(main_block_endRoutineBegin());
flowScheduler.add(main_block_endRoutineEachFrame());
flowScheduler.add(main_block_endRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(byeRoutineBegin());
flowScheduler.add(byeRoutineEachFrame());
flowScheduler.add(byeRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'movies/movie0041/allnonbio/clip000746.mp4', 'path': 'movies/movie0041/allnonbio/clip000746.mp4'},
    {'name': 'movies/movie0032/allbio/clip000358.mp4', 'path': 'movies/movie0032/allbio/clip000358.mp4'},
    {'name': 'movies/movie0044/allbio/clip000590.mp4', 'path': 'movies/movie0044/allbio/clip000590.mp4'},
    {'name': 'moviesDirections/movie44/nonbio/nonbiotestMovie44.xlsx', 'path': 'moviesDirections/movie44/nonbio/nonbiotestMovie44.xlsx'},
    {'name': 'movies/movie0006/testbio/clip000661.mp4', 'path': 'movies/movie0006/testbio/clip000661.mp4'},
    {'name': 'movies/movie0041/allnonbio/clip000774.mp4', 'path': 'movies/movie0041/allnonbio/clip000774.mp4'},
    {'name': 'movies/movie0044/allnonbio/clip000177.mp4', 'path': 'movies/movie0044/allnonbio/clip000177.mp4'},
    {'name': 'moviesDirections/movie13/bio/testbioMovie13.xlsx', 'path': 'moviesDirections/movie13/bio/testbioMovie13.xlsx'},
    {'name': 'movies/movie0045/allbio/clip000481.mp4', 'path': 'movies/movie0045/allbio/clip000481.mp4'},
    {'name': 'movies/movie0102/allnonbio/clip000161.mp4', 'path': 'movies/movie0102/allnonbio/clip000161.mp4'},
    {'name': 'movies/movie0120/allbio/clip000105.mp4', 'path': 'movies/movie0120/allbio/clip000105.mp4'},
    {'name': 'movies/movie0041/allbio/clip000211.mp4', 'path': 'movies/movie0041/allbio/clip000211.mp4'},
    {'name': 'movies/movie0102/allbio/clip000811.mp4', 'path': 'movies/movie0102/allbio/clip000811.mp4'},
    {'name': 'movies/movie0045/allnonbio/clip000513.mp4', 'path': 'movies/movie0045/allnonbio/clip000513.mp4'},
    {'name': 'movies/movie0045/allbio/clip000489.mp4', 'path': 'movies/movie0045/allbio/clip000489.mp4'},
    {'name': 'movies/movie0007/allbio/clip000100.mp4', 'path': 'movies/movie0007/allbio/clip000100.mp4'},
    {'name': 'movies/movie0102/allnonbio/clip001233.mp4', 'path': 'movies/movie0102/allnonbio/clip001233.mp4'},
    {'name': 'movies/movie0016/allnonbio/clip000818.mp4', 'path': 'movies/movie0016/allnonbio/clip000818.mp4'},
    {'name': 'movies/movie0026/allnonbio/clip000122.mp4', 'path': 'movies/movie0026/allnonbio/clip000122.mp4'},
    {'name': 'movies/movie0032/allnonbio/clip000119.mp4', 'path': 'movies/movie0032/allnonbio/clip000119.mp4'},
    {'name': 'movies/movie0013/testbio/clip000372.mp4', 'path': 'movies/movie0013/testbio/clip000372.mp4'},
    {'name': 'movies/movie0026/allbio/clip000221.mp4', 'path': 'movies/movie0026/allbio/clip000221.mp4'},
    {'name': 'movies/movie0001/allbio/clip000330.mp4', 'path': 'movies/movie0001/allbio/clip000330.mp4'},
    {'name': 'moviesDirections/movie20/nonbio/nonbiotestMovie20.xlsx', 'path': 'moviesDirections/movie20/nonbio/nonbiotestMovie20.xlsx'},
    {'name': 'movies/movie0007/testnonbio/clip000001.mp4', 'path': 'movies/movie0007/testnonbio/clip000001.mp4'},
    {'name': 'movies/movie0032/allbio/clip000360.mp4', 'path': 'movies/movie0032/allbio/clip000360.mp4'},
    {'name': 'movies/movie0045/allbio/clip000574.mp4', 'path': 'movies/movie0045/allbio/clip000574.mp4'},
    {'name': 'movies/movie0016/allnonbio/clip000328.mp4', 'path': 'movies/movie0016/allnonbio/clip000328.mp4'},
    {'name': 'movies/movie0030/allnonbio/clip000259.mp4', 'path': 'movies/movie0030/allnonbio/clip000259.mp4'},
    {'name': 'movies/movie0045/allnonbio/clip000109.mp4', 'path': 'movies/movie0045/allnonbio/clip000109.mp4'},
    {'name': 'movies/movie0102/allbio/clip000645.mp4', 'path': 'movies/movie0102/allbio/clip000645.mp4'},
    {'name': 'movies/movie0111/allnonbio/clip000333.mp4', 'path': 'movies/movie0111/allnonbio/clip000333.mp4'},
    {'name': 'movies/movie0006/allnonbio/clip000730.mp4', 'path': 'movies/movie0006/allnonbio/clip000730.mp4'},
    {'name': 'movies/movie0111/allbio/clip000603.mp4', 'path': 'movies/movie0111/allbio/clip000603.mp4'},
    {'name': 'movies/movie0016/allnonbio/clip000177.mp4', 'path': 'movies/movie0016/allnonbio/clip000177.mp4'},
    {'name': 'moviesDirections/movie18/nonbio/nonbioMovie18.xlsx', 'path': 'moviesDirections/movie18/nonbio/nonbioMovie18.xlsx'},
    {'name': 'movies/movie0018/allnonbio/clip000081.mp4', 'path': 'movies/movie0018/allnonbio/clip000081.mp4'},
    {'name': 'moviesDirections/movie44/bio/testbioMovie44.xlsx', 'path': 'moviesDirections/movie44/bio/testbioMovie44.xlsx'},
    {'name': 'movies/movie0013/testnonbio/clip000062.mp4', 'path': 'movies/movie0013/testnonbio/clip000062.mp4'},
    {'name': 'movies/movie0079/allnonbio/clip000088.mp4', 'path': 'movies/movie0079/allnonbio/clip000088.mp4'},
    {'name': 'movies/movie0020/allnonbio/clip000652.mp4', 'path': 'movies/movie0020/allnonbio/clip000652.mp4'},
    {'name': 'movies/movie0007/allnonbio/clip000511.mp4', 'path': 'movies/movie0007/allnonbio/clip000511.mp4'},
    {'name': 'movies/movie0048/allnonbio/clip000193.mp4', 'path': 'movies/movie0048/allnonbio/clip000193.mp4'},
    {'name': 'movies/movie0120/allnonbio/clip000144.mp4', 'path': 'movies/movie0120/allnonbio/clip000144.mp4'},
    {'name': 'movies/practicemovie/testbio/clip000482.mp4', 'path': 'movies/practicemovie/testbio/clip000482.mp4'},
    {'name': 'movies/movie0006/allbio/clip000031.mp4', 'path': 'movies/movie0006/allbio/clip000031.mp4'},
    {'name': 'movies/movie0030/allnonbio/clip000465.mp4', 'path': 'movies/movie0030/allnonbio/clip000465.mp4'},
    {'name': 'movies/movie0049/allbio/clip000570.mp4', 'path': 'movies/movie0049/allbio/clip000570.mp4'},
    {'name': 'movies/movie0004/allbio/clip000102.mp4', 'path': 'movies/movie0004/allbio/clip000102.mp4'},
    {'name': 'movies/movie0026/allbio/clip000050.mp4', 'path': 'movies/movie0026/allbio/clip000050.mp4'},
    {'name': 'movies/movie0013/allbio/clip000183.mp4', 'path': 'movies/movie0013/allbio/clip000183.mp4'},
    {'name': 'movies/movie0013/testnonbio/clip000058.mp4', 'path': 'movies/movie0013/testnonbio/clip000058.mp4'},
    {'name': 'moviesDirections/movie45/nonbio/nonbiotestMovie45.xlsx', 'path': 'moviesDirections/movie45/nonbio/nonbiotestMovie45.xlsx'},
    {'name': 'moviesDirections/movie6/nonbio/nonbiotestMovie6.xlsx', 'path': 'moviesDirections/movie6/nonbio/nonbiotestMovie6.xlsx'},
    {'name': 'movies/movie0004/allbio/clip001170.mp4', 'path': 'movies/movie0004/allbio/clip001170.mp4'},
    {'name': 'movies/movie0102/allbio/clip000588.mp4', 'path': 'movies/movie0102/allbio/clip000588.mp4'},
    {'name': 'movies/movie0007/testnonbio/clip000274.mp4', 'path': 'movies/movie0007/testnonbio/clip000274.mp4'},
    {'name': 'movies/movie0016/allnonbio/clip000044.mp4', 'path': 'movies/movie0016/allnonbio/clip000044.mp4'},
    {'name': 'movies/movie0016/allbio/clip000553.mp4', 'path': 'movies/movie0016/allbio/clip000553.mp4'},
    {'name': 'moviesDirections/movie4/bio/bioMovie4.xlsx', 'path': 'moviesDirections/movie4/bio/bioMovie4.xlsx'},
    {'name': 'movies/movie0030/allnonbio/clip000348.mp4', 'path': 'movies/movie0030/allnonbio/clip000348.mp4'},
    {'name': 'moviesDirections/movie26/nonbio/nonbioMovie26.xlsx', 'path': 'moviesDirections/movie26/nonbio/nonbioMovie26.xlsx'},
    {'name': 'movies/movie0004/allnonbio/clip001138.mp4', 'path': 'movies/movie0004/allnonbio/clip001138.mp4'},
    {'name': 'moviesDirections/movie48/nonbio/nonbioMovie48.xlsx', 'path': 'moviesDirections/movie48/nonbio/nonbioMovie48.xlsx'},
    {'name': 'movies/movie0102/allnonbio/clip000159.mp4', 'path': 'movies/movie0102/allnonbio/clip000159.mp4'},
    {'name': 'movies/movie0016/allnonbio/clip000180.mp4', 'path': 'movies/movie0016/allnonbio/clip000180.mp4'},
    {'name': 'movies/movie0006/allbio/clip000490.mp4', 'path': 'movies/movie0006/allbio/clip000490.mp4'},
    {'name': 'movies/movie0018/allbio/clip000378.mp4', 'path': 'movies/movie0018/allbio/clip000378.mp4'},
    {'name': 'moviesDirections/movie102/nonbio/nonbiotestMovie102.xlsx', 'path': 'moviesDirections/movie102/nonbio/nonbiotestMovie102.xlsx'},
    {'name': 'moviesDirections/movie111/bio/bioMovie111.xlsx', 'path': 'moviesDirections/movie111/bio/bioMovie111.xlsx'},
    {'name': 'movies/movie0044/allnonbio/clip000012.mp4', 'path': 'movies/movie0044/allnonbio/clip000012.mp4'},
    {'name': 'moviesDirections/movie32/nonbio/nonbiotestMovie32.xlsx', 'path': 'moviesDirections/movie32/nonbio/nonbiotestMovie32.xlsx'},
    {'name': 'movies/movie0102/allbio/clip000749.mp4', 'path': 'movies/movie0102/allbio/clip000749.mp4'},
    {'name': 'movies/movie0032/allbio/clip000401.mp4', 'path': 'movies/movie0032/allbio/clip000401.mp4'},
    {'name': 'movies/movie0111/allbio/clip000336.mp4', 'path': 'movies/movie0111/allbio/clip000336.mp4'},
    {'name': 'movies/movie0030/allbio/clip000004.mp4', 'path': 'movies/movie0030/allbio/clip000004.mp4'},
    {'name': 'movies/movie0026/allbio/clip000284.mp4', 'path': 'movies/movie0026/allbio/clip000284.mp4'},
    {'name': 'movies/movie0013/allnonbio/clip000197.mp4', 'path': 'movies/movie0013/allnonbio/clip000197.mp4'},
    {'name': 'movies/movie0026/allbio/clip000233.mp4', 'path': 'movies/movie0026/allbio/clip000233.mp4'},
    {'name': 'movies/movie0120/allnonbio/clip000136.mp4', 'path': 'movies/movie0120/allnonbio/clip000136.mp4'},
    {'name': 'movies/movie0045/allnonbio/clip000111.mp4', 'path': 'movies/movie0045/allnonbio/clip000111.mp4'},
    {'name': 'movies/movie0004/testbio/clip000890.mp4', 'path': 'movies/movie0004/testbio/clip000890.mp4'},
    {'name': 'movies/movie0006/allbio/clip000552.mp4', 'path': 'movies/movie0006/allbio/clip000552.mp4'},
    {'name': 'movies/movie0007/testbio/clip000288.mp4', 'path': 'movies/movie0007/testbio/clip000288.mp4'},
    {'name': 'movies/movie0048/allbio/clip000141.mp4', 'path': 'movies/movie0048/allbio/clip000141.mp4'},
    {'name': 'movies/movie0018/testnonbio/clip000081.mp4', 'path': 'movies/movie0018/testnonbio/clip000081.mp4'},
    {'name': 'movies/movie0020/allnonbio/clip000004.mp4', 'path': 'movies/movie0020/allnonbio/clip000004.mp4'},
    {'name': 'moviesDirections/movie7/bio/testbioMovie7.xlsx', 'path': 'moviesDirections/movie7/bio/testbioMovie7.xlsx'},
    {'name': 'movies/movie0001/allbio/clip000152.mp4', 'path': 'movies/movie0001/allbio/clip000152.mp4'},
    {'name': 'movies/movie0004/testbio/clip001170.mp4', 'path': 'movies/movie0004/testbio/clip001170.mp4'},
    {'name': 'movies/movie0001/allnonbio/clip000132.mp4', 'path': 'movies/movie0001/allnonbio/clip000132.mp4'},
    {'name': 'moviesDirections/movie1/bio/testbioMovie1.xlsx', 'path': 'moviesDirections/movie1/bio/testbioMovie1.xlsx'},
    {'name': 'moviesDirections/movie41/nonbio/nonbioMovie41.xlsx', 'path': 'moviesDirections/movie41/nonbio/nonbioMovie41.xlsx'},
    {'name': 'movies/movie0020/allbio/clip000552.mp4', 'path': 'movies/movie0020/allbio/clip000552.mp4'},
    {'name': 'movies/movie0044/allnonbio/clip000587.mp4', 'path': 'movies/movie0044/allnonbio/clip000587.mp4'},
    {'name': 'moviesDirections/movie26/bio/bioMovie26.xlsx', 'path': 'moviesDirections/movie26/bio/bioMovie26.xlsx'},
    {'name': 'movies/movie0041/allnonbio/clip000738.mp4', 'path': 'movies/movie0041/allnonbio/clip000738.mp4'},
    {'name': 'movies/movie0026/allnonbio/clip000053.mp4', 'path': 'movies/movie0026/allnonbio/clip000053.mp4'},
    {'name': 'movies/movie0013/testnonbio/clip000231.mp4', 'path': 'movies/movie0013/testnonbio/clip000231.mp4'},
    {'name': 'movies/movie0016/allnonbio/clip000171.mp4', 'path': 'movies/movie0016/allnonbio/clip000171.mp4'},
    {'name': 'moviesDirections/movie26/nonbio/nonbiotestMovie26.xlsx', 'path': 'moviesDirections/movie26/nonbio/nonbiotestMovie26.xlsx'},
    {'name': 'movies/movie0013/allnonbio/clip000062.mp4', 'path': 'movies/movie0013/allnonbio/clip000062.mp4'},
    {'name': 'movies/movie0079/allbio/clip000502.mp4', 'path': 'movies/movie0079/allbio/clip000502.mp4'},
    {'name': 'moviesDirections/movie16/nonbio/nonbiotestMovie16.xlsx', 'path': 'moviesDirections/movie16/nonbio/nonbiotestMovie16.xlsx'},
    {'name': 'movies/movie0111/allbio/clip000737.mp4', 'path': 'movies/movie0111/allbio/clip000737.mp4'},
    {'name': 'movies/movie0013/allbio/clip000466.mp4', 'path': 'movies/movie0013/allbio/clip000466.mp4'},
    {'name': 'movies/practicemovie/allbio/clip000005.mp4', 'path': 'movies/practicemovie/allbio/clip000005.mp4'},
    {'name': 'movies/movie0045/allnonbio/clip000052.mp4', 'path': 'movies/movie0045/allnonbio/clip000052.mp4'},
    {'name': 'movies/movie0013/allnonbio/clip000059.mp4', 'path': 'movies/movie0013/allnonbio/clip000059.mp4'},
    {'name': 'movies/movie0032/allnonbio/clip000326.mp4', 'path': 'movies/movie0032/allnonbio/clip000326.mp4'},
    {'name': 'movies/movie0044/allbio/clip000318.mp4', 'path': 'movies/movie0044/allbio/clip000318.mp4'},
    {'name': 'movies/movie0079/allbio/clip000553.mp4', 'path': 'movies/movie0079/allbio/clip000553.mp4'},
    {'name': 'movies/movie0013/allnonbio/clip000321.mp4', 'path': 'movies/movie0013/allnonbio/clip000321.mp4'},
    {'name': 'movies/movie0026/allnonbio/clip000185.mp4', 'path': 'movies/movie0026/allnonbio/clip000185.mp4'},
    {'name': 'movies/movie0001/allbio/clip000018.mp4', 'path': 'movies/movie0001/allbio/clip000018.mp4'},
    {'name': 'movies/movie0041/allbio/clip000181.mp4', 'path': 'movies/movie0041/allbio/clip000181.mp4'},
    {'name': 'movies/movie0016/testnonbio/clip000171.mp4', 'path': 'movies/movie0016/testnonbio/clip000171.mp4'},
    {'name': 'moviesDirections/movie102/bio/testbioMovie102.xlsx', 'path': 'moviesDirections/movie102/bio/testbioMovie102.xlsx'},
    {'name': 'movies/practicemovie/testbio/clip000068.mp4', 'path': 'movies/practicemovie/testbio/clip000068.mp4'},
    {'name': 'movies/movie0102/allnonbio/clip000160.mp4', 'path': 'movies/movie0102/allnonbio/clip000160.mp4'},
    {'name': 'movies/movie0049/allbio/clip000300.mp4', 'path': 'movies/movie0049/allbio/clip000300.mp4'},
    {'name': 'movies/movie0044/allbio/clip000456.mp4', 'path': 'movies/movie0044/allbio/clip000456.mp4'},
    {'name': 'movies/movie0030/allnonbio/clip000479.mp4', 'path': 'movies/movie0030/allnonbio/clip000479.mp4'},
    {'name': 'movies/movie0018/allbio/clip000502.mp4', 'path': 'movies/movie0018/allbio/clip000502.mp4'},
    {'name': 'movies/movie0032/allbio/clip000279.mp4', 'path': 'movies/movie0032/allbio/clip000279.mp4'},
    {'name': 'movies/movie0049/allnonbio/clip000553.mp4', 'path': 'movies/movie0049/allnonbio/clip000553.mp4'},
    {'name': 'movies/movie0079/allnonbio/clip000357.mp4', 'path': 'movies/movie0079/allnonbio/clip000357.mp4'},
    {'name': 'movies/movie0007/allbio/clip000017.mp4', 'path': 'movies/movie0007/allbio/clip000017.mp4'},
    {'name': 'movies/movie0049/allnonbio/clip000712.mp4', 'path': 'movies/movie0049/allnonbio/clip000712.mp4'},
    {'name': 'movies/movie0120/allbio/clip000543.mp4', 'path': 'movies/movie0120/allbio/clip000543.mp4'},
    {'name': 'movies/movie0079/allbio/clip000671.mp4', 'path': 'movies/movie0079/allbio/clip000671.mp4'},
    {'name': 'movies/movie0111/allnonbio/clip000002.mp4', 'path': 'movies/movie0111/allnonbio/clip000002.mp4'},
    {'name': 'movies/movie0004/allnonbio/clip000988.mp4', 'path': 'movies/movie0004/allnonbio/clip000988.mp4'},
    {'name': 'moviesDirections/movie111/nonbio/nonbiotestMovie111.xlsx', 'path': 'moviesDirections/movie111/nonbio/nonbiotestMovie111.xlsx'},
    {'name': 'movies/movie0026/allnonbio/clip000051.mp4', 'path': 'movies/movie0026/allnonbio/clip000051.mp4'},
    {'name': 'movies/movie0004/testbio/clip000864.mp4', 'path': 'movies/movie0004/testbio/clip000864.mp4'},
    {'name': 'moviesDirections/movie48/bio/bioMovie48.xlsx', 'path': 'moviesDirections/movie48/bio/bioMovie48.xlsx'},
    {'name': 'movies/movie0006/allbio/clip000342.mp4', 'path': 'movies/movie0006/allbio/clip000342.mp4'},
    {'name': 'movies/movie0044/allnonbio/clip000080.mp4', 'path': 'movies/movie0044/allnonbio/clip000080.mp4'},
    {'name': 'moviesDirections/movie120/nonbio/nonbioMovie120.xlsx', 'path': 'moviesDirections/movie120/nonbio/nonbioMovie120.xlsx'},
    {'name': 'movies/movie0001/allnonbio/clip000554.mp4', 'path': 'movies/movie0001/allnonbio/clip000554.mp4'},
    {'name': 'movies/movie0001/allbio/clip000523.mp4', 'path': 'movies/movie0001/allbio/clip000523.mp4'},
    {'name': 'movies/movie0004/testbio/clip001119.mp4', 'path': 'movies/movie0004/testbio/clip001119.mp4'},
    {'name': 'movies/movie0026/allbio/clip000084.mp4', 'path': 'movies/movie0026/allbio/clip000084.mp4'},
    {'name': 'movies/movie0004/allbio/clip001119.mp4', 'path': 'movies/movie0004/allbio/clip001119.mp4'},
    {'name': 'movies/movie0049/allnonbio/clip000572.mp4', 'path': 'movies/movie0049/allnonbio/clip000572.mp4'},
    {'name': 'movies/movie0007/allnonbio/clip000405.mp4', 'path': 'movies/movie0007/allnonbio/clip000405.mp4'},
    {'name': 'movies/movie0018/allnonbio/clip000057.mp4', 'path': 'movies/movie0018/allnonbio/clip000057.mp4'},
    {'name': 'movies/movie0048/allbio/clip000365.mp4', 'path': 'movies/movie0048/allbio/clip000365.mp4'},
    {'name': 'movies/movie0018/allnonbio/clip000026.mp4', 'path': 'movies/movie0018/allnonbio/clip000026.mp4'},
    {'name': 'movies/movie0020/allbio/clip000223.mp4', 'path': 'movies/movie0020/allbio/clip000223.mp4'},
    {'name': 'movies/movie0102/allbio/clip001314.mp4', 'path': 'movies/movie0102/allbio/clip001314.mp4'},
    {'name': 'movies/movie0007/testnonbio/clip000265.mp4', 'path': 'movies/movie0007/testnonbio/clip000265.mp4'},
    {'name': 'movies/movie0030/allbio/clip000136.mp4', 'path': 'movies/movie0030/allbio/clip000136.mp4'},
    {'name': 'movies/movie0007/allnonbio/clip000001.mp4', 'path': 'movies/movie0007/allnonbio/clip000001.mp4'},
    {'name': 'movies/movie0018/allbio/clip000276.mp4', 'path': 'movies/movie0018/allbio/clip000276.mp4'},
    {'name': 'moviesDirections/movie32/nonbio/nonbioMovie32.xlsx', 'path': 'moviesDirections/movie32/nonbio/nonbioMovie32.xlsx'},
    {'name': 'movies/movie0102/allbio/clip000511.mp4', 'path': 'movies/movie0102/allbio/clip000511.mp4'},
    {'name': 'movies/movie0102/allbio/clip001276.mp4', 'path': 'movies/movie0102/allbio/clip001276.mp4'},
    {'name': 'movies/practicemovie/allbio/clip000482.mp4', 'path': 'movies/practicemovie/allbio/clip000482.mp4'},
    {'name': 'moviesDirections/movie18/bio/bioMovie18.xlsx', 'path': 'moviesDirections/movie18/bio/bioMovie18.xlsx'},
    {'name': 'movies/movie0006/allnonbio/clip000153.mp4', 'path': 'movies/movie0006/allnonbio/clip000153.mp4'},
    {'name': 'movies/movie0016/allbio/clip000814.mp4', 'path': 'movies/movie0016/allbio/clip000814.mp4'},
    {'name': 'movies/movie0041/allbio/clip000857.mp4', 'path': 'movies/movie0041/allbio/clip000857.mp4'},
    {'name': 'moviesDirections/movie48/bio/testbioMovie48.xlsx', 'path': 'moviesDirections/movie48/bio/testbioMovie48.xlsx'},
    {'name': 'movies/movie0001/allbio/clip000436.mp4', 'path': 'movies/movie0001/allbio/clip000436.mp4'},
    {'name': 'moviesDirections/movie49/bio/testbioMovie49.xlsx', 'path': 'moviesDirections/movie49/bio/testbioMovie49.xlsx'},
    {'name': 'movies/movie0004/allnonbio/clip001050.mp4', 'path': 'movies/movie0004/allnonbio/clip001050.mp4'},
    {'name': 'moviesDirections/practivemovie/testbioMoviePractice.xlsx', 'path': 'moviesDirections/practivemovie/testbioMoviePractice.xlsx'},
    {'name': 'movies/movie0045/allbio/clip000690.mp4', 'path': 'movies/movie0045/allbio/clip000690.mp4'},
    {'name': 'movies/movie0018/allbio/clip000163.mp4', 'path': 'movies/movie0018/allbio/clip000163.mp4'},
    {'name': 'movies/movie0120/allnonbio/clip000290.mp4', 'path': 'movies/movie0120/allnonbio/clip000290.mp4'},
    {'name': 'movies/movie0004/allnonbio/clip001057.mp4', 'path': 'movies/movie0004/allnonbio/clip001057.mp4'},
    {'name': 'movies/movie0045/allbio/clip000727.mp4', 'path': 'movies/movie0045/allbio/clip000727.mp4'},
    {'name': 'movies/movie0048/allbio/clip000581.mp4', 'path': 'movies/movie0048/allbio/clip000581.mp4'},
    {'name': 'moviesDirections/movie4/bio/testbioMovie4.xlsx', 'path': 'moviesDirections/movie4/bio/testbioMovie4.xlsx'},
    {'name': 'movies/movie0020/allnonbio/clip000587.mp4', 'path': 'movies/movie0020/allnonbio/clip000587.mp4'},
    {'name': 'movies/movie0048/allbio/clip000660.mp4', 'path': 'movies/movie0048/allbio/clip000660.mp4'},
    {'name': 'moviesDirections/movie7/nonbio/nonbiotestMovie7.xlsx', 'path': 'moviesDirections/movie7/nonbio/nonbiotestMovie7.xlsx'},
    {'name': 'movies/movie0120/allbio/clip000684.mp4', 'path': 'movies/movie0120/allbio/clip000684.mp4'},
    {'name': 'movies/movie0048/allnonbio/clip000558.mp4', 'path': 'movies/movie0048/allnonbio/clip000558.mp4'},
    {'name': 'movies/movie0006/allnonbio/clip000187.mp4', 'path': 'movies/movie0006/allnonbio/clip000187.mp4'},
    {'name': 'movies/movie0018/allnonbio/clip000071.mp4', 'path': 'movies/movie0018/allnonbio/clip000071.mp4'},
    {'name': 'movies/movie0111/allnonbio/clip000345.mp4', 'path': 'movies/movie0111/allnonbio/clip000345.mp4'},
    {'name': 'movies/movie0007/allbio/clip000268.mp4', 'path': 'movies/movie0007/allbio/clip000268.mp4'},
    {'name': 'movies/movie0006/testbio/clip000472.mp4', 'path': 'movies/movie0006/testbio/clip000472.mp4'},
    {'name': 'movies/practicemovie/allbio/clip000168.mp4', 'path': 'movies/practicemovie/allbio/clip000168.mp4'},
    {'name': 'movies/practicemovie/testbio/clip000005.mp4', 'path': 'movies/practicemovie/testbio/clip000005.mp4'},
    {'name': 'movies/movie0013/testbio/clip000430.mp4', 'path': 'movies/movie0013/testbio/clip000430.mp4'},
    {'name': 'movies/movie0013/allnonbio/clip000209.mp4', 'path': 'movies/movie0013/allnonbio/clip000209.mp4'},
    {'name': 'moviesDirections/movie6/nonbio/nonbioMovie6.xlsx', 'path': 'moviesDirections/movie6/nonbio/nonbioMovie6.xlsx'},
    {'name': 'movies/movie0018/testnonbio/clip000026.mp4', 'path': 'movies/movie0018/testnonbio/clip000026.mp4'},
    {'name': 'movies/movie0016/allnonbio/clip000819.mp4', 'path': 'movies/movie0016/allnonbio/clip000819.mp4'},
    {'name': 'movies/movie0049/allbio/clip000687.mp4', 'path': 'movies/movie0049/allbio/clip000687.mp4'},
    {'name': 'movies/movie0013/allnonbio/clip000057.mp4', 'path': 'movies/movie0013/allnonbio/clip000057.mp4'},
    {'name': 'movies/movie0048/allnonbio/clip000326.mp4', 'path': 'movies/movie0048/allnonbio/clip000326.mp4'},
    {'name': 'movies/movie0048/allbio/clip000473.mp4', 'path': 'movies/movie0048/allbio/clip000473.mp4'},
    {'name': 'movies/movie0032/allbio/clip000045.mp4', 'path': 'movies/movie0032/allbio/clip000045.mp4'},
    {'name': 'movies/movie0030/allbio/clip000485.mp4', 'path': 'movies/movie0030/allbio/clip000485.mp4'},
    {'name': 'movies/movie0111/allbio/clip000966.mp4', 'path': 'movies/movie0111/allbio/clip000966.mp4'},
    {'name': 'movies/movie0041/allnonbio/clip000739.mp4', 'path': 'movies/movie0041/allnonbio/clip000739.mp4'},
    {'name': 'movies/movie0007/testbio/clip000268.mp4', 'path': 'movies/movie0007/testbio/clip000268.mp4'},
    {'name': 'movies/movie0048/allnonbio/clip000331.mp4', 'path': 'movies/movie0048/allnonbio/clip000331.mp4'},
    {'name': 'movies/movie0013/allbio/clip000083.mp4', 'path': 'movies/movie0013/allbio/clip000083.mp4'},
    {'name': 'movies/practicemovie/testbio/clip000100.mp4', 'path': 'movies/practicemovie/testbio/clip000100.mp4'},
    {'name': 'movies/movie0120/allnonbio/clip000117.mp4', 'path': 'movies/movie0120/allnonbio/clip000117.mp4'},
    {'name': 'movies/movie0079/allnonbio/clip000548.mp4', 'path': 'movies/movie0079/allnonbio/clip000548.mp4'},
    {'name': 'moviesDirections/movie30/nonbio/nonbiotestMovie30.xlsx', 'path': 'moviesDirections/movie30/nonbio/nonbiotestMovie30.xlsx'},
    {'name': 'movies/movie0006/allbio/clip000371.mp4', 'path': 'movies/movie0006/allbio/clip000371.mp4'},
    {'name': 'movies/movie0006/allnonbio/clip000243.mp4', 'path': 'movies/movie0006/allnonbio/clip000243.mp4'},
    {'name': 'all_movies.xlsx', 'path': 'all_movies.xlsx'},
    {'name': 'movies/movie0120/allbio/clip000639.mp4', 'path': 'movies/movie0120/allbio/clip000639.mp4'},
    {'name': 'movies/movie0016/allbio/clip000717.mp4', 'path': 'movies/movie0016/allbio/clip000717.mp4'},
    {'name': 'movies/movie0001/allbio/clip000234.mp4', 'path': 'movies/movie0001/allbio/clip000234.mp4'},
    {'name': 'moviesDirections/movie111/bio/testbioMovie111.xlsx', 'path': 'moviesDirections/movie111/bio/testbioMovie111.xlsx'},
    {'name': 'movies/movie0120/allnonbio/clip000135.mp4', 'path': 'movies/movie0120/allnonbio/clip000135.mp4'},
    {'name': 'movies/movie0030/allnonbio/clip000466.mp4', 'path': 'movies/movie0030/allnonbio/clip000466.mp4'},
    {'name': 'moviesDirections/movie41/bio/bioMovie41.xlsx', 'path': 'moviesDirections/movie41/bio/bioMovie41.xlsx'},
    {'name': 'movies/movie0079/allbio/clip000175.mp4', 'path': 'movies/movie0079/allbio/clip000175.mp4'},
    {'name': 'moviesDirections/movie16/bio/testbioMovie16.xlsx', 'path': 'moviesDirections/movie16/bio/testbioMovie16.xlsx'},
    {'name': 'movies/movie0026/allnonbio/clip000070.mp4', 'path': 'movies/movie0026/allnonbio/clip000070.mp4'},
    {'name': 'movies/movie0049/allbio/clip000793.mp4', 'path': 'movies/movie0049/allbio/clip000793.mp4'},
    {'name': 'movies/movie0048/allbio/clip000286.mp4', 'path': 'movies/movie0048/allbio/clip000286.mp4'},
    {'name': 'movies/movie0111/allbio/clip000278.mp4', 'path': 'movies/movie0111/allbio/clip000278.mp4'},
    {'name': 'movies/movie0006/testnonbio/clip000243.mp4', 'path': 'movies/movie0006/testnonbio/clip000243.mp4'},
    {'name': 'movies/movie0007/testnonbio/clip000103.mp4', 'path': 'movies/movie0007/testnonbio/clip000103.mp4'},
    {'name': 'movies/movie0016/testbio/clip000684.mp4', 'path': 'movies/movie0016/testbio/clip000684.mp4'},
    {'name': 'movies/movie0048/allbio/clip000601.mp4', 'path': 'movies/movie0048/allbio/clip000601.mp4'},
    {'name': 'movies/movie0018/testbio/clip000163.mp4', 'path': 'movies/movie0018/testbio/clip000163.mp4'},
    {'name': 'movies/movie0120/allbio/clip000416.mp4', 'path': 'movies/movie0120/allbio/clip000416.mp4'},
    {'name': 'movies/movie0111/allbio/clip000393.mp4', 'path': 'movies/movie0111/allbio/clip000393.mp4'},
    {'name': 'movies/practicemovie/testbio/clip000271.mp4', 'path': 'movies/practicemovie/testbio/clip000271.mp4'},
    {'name': 'movies/movie0111/allbio/clip000668.mp4', 'path': 'movies/movie0111/allbio/clip000668.mp4'},
    {'name': 'movies/movie0111/allnonbio/clip000749.mp4', 'path': 'movies/movie0111/allnonbio/clip000749.mp4'},
    {'name': 'movies/movie0049/allnonbio/clip000550.mp4', 'path': 'movies/movie0049/allnonbio/clip000550.mp4'},
    {'name': 'movies/movie0079/allbio/clip000586.mp4', 'path': 'movies/movie0079/allbio/clip000586.mp4'},
    {'name': 'movies/practicemovie/allbio/clip000271.mp4', 'path': 'movies/practicemovie/allbio/clip000271.mp4'},
    {'name': 'movies/movie0007/testnonbio/clip000210.mp4', 'path': 'movies/movie0007/testnonbio/clip000210.mp4'},
    {'name': 'movies/movie0001/allbio/clip000350.mp4', 'path': 'movies/movie0001/allbio/clip000350.mp4'},
    {'name': 'movies/movie0026/allnonbio/clip000295.mp4', 'path': 'movies/movie0026/allnonbio/clip000295.mp4'},
    {'name': 'movies/movie0032/allnonbio/clip000212.mp4', 'path': 'movies/movie0032/allnonbio/clip000212.mp4'},
    {'name': 'moviesDirections/movie41/bio/testbioMovie41.xlsx', 'path': 'moviesDirections/movie41/bio/testbioMovie41.xlsx'},
    {'name': 'movies/movie0041/allbio/clip000329.mp4', 'path': 'movies/movie0041/allbio/clip000329.mp4'},
    {'name': 'movies/movie0006/testnonbio/clip000109.mp4', 'path': 'movies/movie0006/testnonbio/clip000109.mp4'},
    {'name': 'movies/movie0102/allnonbio/clip000763.mp4', 'path': 'movies/movie0102/allnonbio/clip000763.mp4'},
    {'name': 'movies/practicemovie/allbio/clip000076.mp4', 'path': 'movies/practicemovie/allbio/clip000076.mp4'},
    {'name': 'movies/movie0030/allnonbio/clip000476.mp4', 'path': 'movies/movie0030/allnonbio/clip000476.mp4'},
    {'name': 'moviesDirections/movie1/nonbio/nonbiotestMovie1.xlsx', 'path': 'moviesDirections/movie1/nonbio/nonbiotestMovie1.xlsx'},
    {'name': 'movies/movie0044/allnonbio/clip000375.mp4', 'path': 'movies/movie0044/allnonbio/clip000375.mp4'},
    {'name': 'movies/movie0032/allnonbio/clip000353.mp4', 'path': 'movies/movie0032/allnonbio/clip000353.mp4'},
    {'name': 'movies/movie0007/allbio/clip000393.mp4', 'path': 'movies/movie0007/allbio/clip000393.mp4'},
    {'name': 'movies/movie0004/allbio/clip000864.mp4', 'path': 'movies/movie0004/allbio/clip000864.mp4'},
    {'name': 'movies/movie0030/allnonbio/clip000156.mp4', 'path': 'movies/movie0030/allnonbio/clip000156.mp4'},
    {'name': 'movies/movie0016/allnonbio/clip000552.mp4', 'path': 'movies/movie0016/allnonbio/clip000552.mp4'},
    {'name': 'moviesDirections/movie79/nonbio/nonbioMovie79.xlsx', 'path': 'moviesDirections/movie79/nonbio/nonbioMovie79.xlsx'},
    {'name': 'movies/movie0007/allbio/clip000546.mp4', 'path': 'movies/movie0007/allbio/clip000546.mp4'},
    {'name': 'movies/movie0018/testbio/clip000457.mp4', 'path': 'movies/movie0018/testbio/clip000457.mp4'},
    {'name': 'moviesDirections/movie49/nonbio/nonbioMovie49.xlsx', 'path': 'moviesDirections/movie49/nonbio/nonbioMovie49.xlsx'},
    {'name': 'movies/movie0006/allnonbio/clip000116.mp4', 'path': 'movies/movie0006/allnonbio/clip000116.mp4'},
    {'name': 'moviesDirections/movie30/bio/testbioMovie30.xlsx', 'path': 'moviesDirections/movie30/bio/testbioMovie30.xlsx'},
    {'name': 'movies/movie0018/testnonbio/clip000060.mp4', 'path': 'movies/movie0018/testnonbio/clip000060.mp4'},
    {'name': 'movies/movie0120/allbio/clip000489.mp4', 'path': 'movies/movie0120/allbio/clip000489.mp4'},
    {'name': 'movies/movie0020/allbio/clip000028.mp4', 'path': 'movies/movie0020/allbio/clip000028.mp4'},
    {'name': 'movies/movie0006/allbio/clip000472.mp4', 'path': 'movies/movie0006/allbio/clip000472.mp4'},
    {'name': 'movies/movie0049/allbio/clip000772.mp4', 'path': 'movies/movie0049/allbio/clip000772.mp4'},
    {'name': 'movies/movie0013/testbio/clip000533.mp4', 'path': 'movies/movie0013/testbio/clip000533.mp4'},
    {'name': 'movies/movie0045/allbio/clip000601.mp4', 'path': 'movies/movie0045/allbio/clip000601.mp4'},
    {'name': 'movies/movie0026/allbio/clip000265.mp4', 'path': 'movies/movie0026/allbio/clip000265.mp4'},
    {'name': 'movies/movie0013/allbio/clip000372.mp4', 'path': 'movies/movie0013/allbio/clip000372.mp4'},
    {'name': 'movies/movie0026/allbio/clip000299.mp4', 'path': 'movies/movie0026/allbio/clip000299.mp4'},
    {'name': 'movies/movie0041/allbio/clip000882.mp4', 'path': 'movies/movie0041/allbio/clip000882.mp4'},
    {'name': 'movies/movie0045/allnonbio/clip000093.mp4', 'path': 'movies/movie0045/allnonbio/clip000093.mp4'},
    {'name': 'movies/movie0013/testnonbio/clip000321.mp4', 'path': 'movies/movie0013/testnonbio/clip000321.mp4'},
    {'name': 'movies/movie0048/allbio/clip000530.mp4', 'path': 'movies/movie0048/allbio/clip000530.mp4'},
    {'name': 'movies/movie0079/allnonbio/clip000319.mp4', 'path': 'movies/movie0079/allnonbio/clip000319.mp4'},
    {'name': 'movies/movie0007/testbio/clip000389.mp4', 'path': 'movies/movie0007/testbio/clip000389.mp4'},
    {'name': 'movies/movie0007/allbio/clip000364.mp4', 'path': 'movies/movie0007/allbio/clip000364.mp4'},
    {'name': 'movies/movie0006/testnonbio/clip000866.mp4', 'path': 'movies/movie0006/testnonbio/clip000866.mp4'},
    {'name': 'movies/movie0020/allbio/clip000135.mp4', 'path': 'movies/movie0020/allbio/clip000135.mp4'},
    {'name': 'movies/movie0044/allnonbio/clip000431.mp4', 'path': 'movies/movie0044/allnonbio/clip000431.mp4'},
    {'name': 'movies/practicemovie/allbio/clip000100.mp4', 'path': 'movies/practicemovie/allbio/clip000100.mp4'},
    {'name': 'movies/movie0044/allbio/clip000411.mp4', 'path': 'movies/movie0044/allbio/clip000411.mp4'},
    {'name': 'movies/movie0013/allbio/clip000533.mp4', 'path': 'movies/movie0013/allbio/clip000533.mp4'},
    {'name': 'movies/movie0013/allnonbio/clip000065.mp4', 'path': 'movies/movie0013/allnonbio/clip000065.mp4'},
    {'name': 'movies/movie0026/allnonbio/clip000068.mp4', 'path': 'movies/movie0026/allnonbio/clip000068.mp4'},
    {'name': 'movies/movie0007/allnonbio/clip000274.mp4', 'path': 'movies/movie0007/allnonbio/clip000274.mp4'},
    {'name': 'movies/movie0001/allbio/clip000010.mp4', 'path': 'movies/movie0001/allbio/clip000010.mp4'},
    {'name': 'movies/movie0041/allnonbio/clip000496.mp4', 'path': 'movies/movie0041/allnonbio/clip000496.mp4'},
    {'name': 'movies/movie0045/allnonbio/clip000454.mp4', 'path': 'movies/movie0045/allnonbio/clip000454.mp4'},
    {'name': 'movies/movie0007/allnonbio/clip000103.mp4', 'path': 'movies/movie0007/allnonbio/clip000103.mp4'},
    {'name': 'movies/movie0030/allnonbio/clip000332.mp4', 'path': 'movies/movie0030/allnonbio/clip000332.mp4'},
    {'name': 'movies/movie0030/allnonbio/clip000557.mp4', 'path': 'movies/movie0030/allnonbio/clip000557.mp4'},
    {'name': 'movies/movie0049/allnonbio/clip000201.mp4', 'path': 'movies/movie0049/allnonbio/clip000201.mp4'},
    {'name': 'movies/movie0032/allbio/clip000001.mp4', 'path': 'movies/movie0032/allbio/clip000001.mp4'},
    {'name': 'movies/movie0004/allbio/clip000966.mp4', 'path': 'movies/movie0004/allbio/clip000966.mp4'},
    {'name': 'movies/movie0007/allnonbio/clip000441.mp4', 'path': 'movies/movie0007/allnonbio/clip000441.mp4'},
    {'name': 'movies/movie0032/allbio/clip000005.mp4', 'path': 'movies/movie0032/allbio/clip000005.mp4'},
    {'name': 'movies/movie0120/allbio/clip000337.mp4', 'path': 'movies/movie0120/allbio/clip000337.mp4'},
    {'name': 'movies/movie0006/allbio/clip000070.mp4', 'path': 'movies/movie0006/allbio/clip000070.mp4'},
    {'name': 'movies/movie0079/allnonbio/clip000315.mp4', 'path': 'movies/movie0079/allnonbio/clip000315.mp4'},
    {'name': 'movies/movie0018/allbio/clip000457.mp4', 'path': 'movies/movie0018/allbio/clip000457.mp4'},
    {'name': 'movies/movie0120/allbio/clip000120.mp4', 'path': 'movies/movie0120/allbio/clip000120.mp4'},
    {'name': 'movies/movie0016/allbio/clip000811.mp4', 'path': 'movies/movie0016/allbio/clip000811.mp4'},
    {'name': 'movies/movie0030/allbio/clip000509.mp4', 'path': 'movies/movie0030/allbio/clip000509.mp4'},
    {'name': 'movies/movie0041/allnonbio/clip000745.mp4', 'path': 'movies/movie0041/allnonbio/clip000745.mp4'},
    {'name': 'movies/movie0007/testbio/clip000079.mp4', 'path': 'movies/movie0007/testbio/clip000079.mp4'},
    {'name': 'movies/movie0102/allbio/clip000847.mp4', 'path': 'movies/movie0102/allbio/clip000847.mp4'},
    {'name': 'movies/movie0111/allnonbio/clip000024.mp4', 'path': 'movies/movie0111/allnonbio/clip000024.mp4'},
    {'name': 'moviesDirections/movie49/bio/bioMovie49.xlsx', 'path': 'moviesDirections/movie49/bio/bioMovie49.xlsx'},
    {'name': 'movies/movie0030/allbio/clip000005.mp4', 'path': 'movies/movie0030/allbio/clip000005.mp4'},
    {'name': 'movies/movie0006/testbio/clip000490.mp4', 'path': 'movies/movie0006/testbio/clip000490.mp4'},
    {'name': 'movies/movie0007/allbio/clip000220.mp4', 'path': 'movies/movie0007/allbio/clip000220.mp4'},
    {'name': 'movies/movie0048/allbio/clip000585.mp4', 'path': 'movies/movie0048/allbio/clip000585.mp4'},
    {'name': 'movies/movie0006/testbio/clip000458.mp4', 'path': 'movies/movie0006/testbio/clip000458.mp4'},
    {'name': 'movies/movie0079/allbio/clip000368.mp4', 'path': 'movies/movie0079/allbio/clip000368.mp4'},
    {'name': 'movies/movie0032/allnonbio/clip000354.mp4', 'path': 'movies/movie0032/allnonbio/clip000354.mp4'},
    {'name': 'moviesDirections/movie41/nonbio/nonbiotestMovie41.xlsx', 'path': 'moviesDirections/movie41/nonbio/nonbiotestMovie41.xlsx'},
    {'name': 'movies/movie0041/allbio/clip000905.mp4', 'path': 'movies/movie0041/allbio/clip000905.mp4'},
    {'name': 'moviesDirections/movie79/bio/bioMovie79.xlsx', 'path': 'moviesDirections/movie79/bio/bioMovie79.xlsx'},
    {'name': 'movies/movie0049/allnonbio/clip000973.mp4', 'path': 'movies/movie0049/allnonbio/clip000973.mp4'},
    {'name': 'movies/movie0001/allnonbio/clip000376.mp4', 'path': 'movies/movie0001/allnonbio/clip000376.mp4'},
    {'name': 'movies/movie0032/allnonbio/clip000221.mp4', 'path': 'movies/movie0032/allnonbio/clip000221.mp4'},
    {'name': 'TheImage.jpg', 'path': 'TheImage.jpg'},
    {'name': 'movies/movie0020/allnonbio/clip000654.mp4', 'path': 'movies/movie0020/allnonbio/clip000654.mp4'},
    {'name': 'movies/movie0048/allbio/clip000557.mp4', 'path': 'movies/movie0048/allbio/clip000557.mp4'},
    {'name': 'movies/movie0018/allnonbio/clip000060.mp4', 'path': 'movies/movie0018/allnonbio/clip000060.mp4'},
    {'name': 'moviesDirections/movie49/nonbio/nonbiotestMovie49.xlsx', 'path': 'moviesDirections/movie49/nonbio/nonbiotestMovie49.xlsx'},
    {'name': 'movies/movie0020/allnonbio/clip000600.mp4', 'path': 'movies/movie0020/allnonbio/clip000600.mp4'},
    {'name': 'movies/movie0044/allnonbio/clip000004.mp4', 'path': 'movies/movie0044/allnonbio/clip000004.mp4'},
    {'name': 'movies/movie0111/allbio/clip000467.mp4', 'path': 'movies/movie0111/allbio/clip000467.mp4'},
    {'name': 'movies/movie0018/allbio/clip000068.mp4', 'path': 'movies/movie0018/allbio/clip000068.mp4'},
    {'name': 'movies/practicemovie/allbio/clip000003.mp4', 'path': 'movies/practicemovie/allbio/clip000003.mp4'},
    {'name': 'moviesDirections/movie4/nonbio/nonbioMovie4.xlsx', 'path': 'moviesDirections/movie4/nonbio/nonbioMovie4.xlsx'},
    {'name': 'movies/movie0016/testnonbio/clip000818.mp4', 'path': 'movies/movie0016/testnonbio/clip000818.mp4'},
    {'name': 'movies/movie0004/testbio/clip001038.mp4', 'path': 'movies/movie0004/testbio/clip001038.mp4'},
    {'name': 'movies/movie0001/allnonbio/clip000464.mp4', 'path': 'movies/movie0001/allnonbio/clip000464.mp4'},
    {'name': 'movies/movie0041/allnonbio/clip000731.mp4', 'path': 'movies/movie0041/allnonbio/clip000731.mp4'},
    {'name': 'movies/movie0013/testbio/clip000341.mp4', 'path': 'movies/movie0013/testbio/clip000341.mp4'},
    {'name': 'movies/movie0018/testbio/clip000462.mp4', 'path': 'movies/movie0018/testbio/clip000462.mp4'},
    {'name': 'movies/movie0018/testnonbio/clip000028.mp4', 'path': 'movies/movie0018/testnonbio/clip000028.mp4'},
    {'name': 'movies/movie0013/testbio/clip000301.mp4', 'path': 'movies/movie0013/testbio/clip000301.mp4'},
    {'name': 'movies/movie0006/testbio/clip000371.mp4', 'path': 'movies/movie0006/testbio/clip000371.mp4'},
    {'name': 'moviesDirections/movie16/nonbio/nonbioMovie16.xlsx', 'path': 'moviesDirections/movie16/nonbio/nonbioMovie16.xlsx'},
    {'name': 'movies/movie0041/allbio/clip000869.mp4', 'path': 'movies/movie0041/allbio/clip000869.mp4'},
    {'name': 'movies/movie0030/allbio/clip000315.mp4', 'path': 'movies/movie0030/allbio/clip000315.mp4'},
    {'name': 'movies/practicemovie/allbio/clip000272.mp4', 'path': 'movies/practicemovie/allbio/clip000272.mp4'},
    {'name': 'movies/movie0020/allbio/clip000491.mp4', 'path': 'movies/movie0020/allbio/clip000491.mp4'},
    {'name': 'movies/movie0018/allbio/clip000241.mp4', 'path': 'movies/movie0018/allbio/clip000241.mp4'},
    {'name': 'moviesDirections/movie16/bio/bioMovie16.xlsx', 'path': 'moviesDirections/movie16/bio/bioMovie16.xlsx'},
    {'name': 'movies/movie0013/testnonbio/clip000064.mp4', 'path': 'movies/movie0013/testnonbio/clip000064.mp4'},
    {'name': 'movies/movie0041/allbio/clip000902.mp4', 'path': 'movies/movie0041/allbio/clip000902.mp4'},
    {'name': 'movies/movie0044/allbio/clip000438.mp4', 'path': 'movies/movie0044/allbio/clip000438.mp4'},
    {'name': 'movies/movie0001/allnonbio/clip000563.mp4', 'path': 'movies/movie0001/allnonbio/clip000563.mp4'},
    {'name': 'movies/movie0044/allbio/clip000335.mp4', 'path': 'movies/movie0044/allbio/clip000335.mp4'},
    {'name': 'movies/movie0102/allnonbio/clip000282.mp4', 'path': 'movies/movie0102/allnonbio/clip000282.mp4'},
    {'name': 'movies/movie0079/allbio/clip000269.mp4', 'path': 'movies/movie0079/allbio/clip000269.mp4'},
    {'name': 'movies/movie0018/allnonbio/clip000275.mp4', 'path': 'movies/movie0018/allnonbio/clip000275.mp4'},
    {'name': 'movies/movie0026/allnonbio/clip000069.mp4', 'path': 'movies/movie0026/allnonbio/clip000069.mp4'},
    {'name': 'movies/movie0018/testbio/clip000241.mp4', 'path': 'movies/movie0018/testbio/clip000241.mp4'},
    {'name': 'movies/movie0026/allbio/clip000315.mp4', 'path': 'movies/movie0026/allbio/clip000315.mp4'},
    {'name': 'movies/movie0041/allbio/clip000497.mp4', 'path': 'movies/movie0041/allbio/clip000497.mp4'},
    {'name': 'movies/movie0006/allbio/clip000458.mp4', 'path': 'movies/movie0006/allbio/clip000458.mp4'},
    {'name': 'movies/movie0006/allnonbio/clip000418.mp4', 'path': 'movies/movie0006/allnonbio/clip000418.mp4'},
    {'name': 'movies/movie0013/allbio/clip000409.mp4', 'path': 'movies/movie0013/allbio/clip000409.mp4'},
    {'name': 'movies/movie0044/allbio/clip000471.mp4', 'path': 'movies/movie0044/allbio/clip000471.mp4'},
    {'name': 'moviesDirections/movie45/bio/bioMovie45.xlsx', 'path': 'moviesDirections/movie45/bio/bioMovie45.xlsx'},
    {'name': 'movies/movie0001/allnonbio/clip000549.mp4', 'path': 'movies/movie0001/allnonbio/clip000549.mp4'},
    {'name': 'movies/movie0001/allnonbio/clip000559.mp4', 'path': 'movies/movie0001/allnonbio/clip000559.mp4'},
    {'name': 'movies/movie0049/allbio/clip000773.mp4', 'path': 'movies/movie0049/allbio/clip000773.mp4'},
    {'name': 'movies/movie0045/allnonbio/clip000012.mp4', 'path': 'movies/movie0045/allnonbio/clip000012.mp4'},
    {'name': 'movies/movie0016/allbio/clip000768.mp4', 'path': 'movies/movie0016/allbio/clip000768.mp4'},
    {'name': 'movies/movie0020/allbio/clip000310.mp4', 'path': 'movies/movie0020/allbio/clip000310.mp4'},
    {'name': 'movies/movie0004/allnonbio/clip000105.mp4', 'path': 'movies/movie0004/allnonbio/clip000105.mp4'},
    {'name': 'movies/movie0004/allbio/clip001038.mp4', 'path': 'movies/movie0004/allbio/clip001038.mp4'},
    {'name': 'movies/movie0016/allbio/clip000400.mp4', 'path': 'movies/movie0016/allbio/clip000400.mp4'},
    {'name': 'moviesDirections/movie120/nonbio/nonbiotestMovie120.xlsx', 'path': 'moviesDirections/movie120/nonbio/nonbiotestMovie120.xlsx'},
    {'name': 'movies/movie0004/allbio/clip000800.mp4', 'path': 'movies/movie0004/allbio/clip000800.mp4'},
    {'name': 'movies/movie0032/allbio/clip000348.mp4', 'path': 'movies/movie0032/allbio/clip000348.mp4'},
    {'name': 'movies/movie0045/allbio/clip000526.mp4', 'path': 'movies/movie0045/allbio/clip000526.mp4'},
    {'name': 'movies/movie0041/allnonbio/clip000786.mp4', 'path': 'movies/movie0041/allnonbio/clip000786.mp4'},
    {'name': 'moviesDirections/practivemovie/bioMoviePractice.xlsx', 'path': 'moviesDirections/practivemovie/bioMoviePractice.xlsx'},
    {'name': 'moviesDirections/movie45/nonbio/nonbioMovie45.xlsx', 'path': 'moviesDirections/movie45/nonbio/nonbioMovie45.xlsx'},
    {'name': 'movies/movie0049/allnonbio/clip000071.mp4', 'path': 'movies/movie0049/allnonbio/clip000071.mp4'},
    {'name': 'moviesDirections/movie32/bio/bioMovie32.xlsx', 'path': 'moviesDirections/movie32/bio/bioMovie32.xlsx'},
    {'name': 'movies/movie0001/allnonbio/clip000137.mp4', 'path': 'movies/movie0001/allnonbio/clip000137.mp4'},
    {'name': 'moviesDirections/movie79/nonbio/nonbiotestMovie79.xlsx', 'path': 'moviesDirections/movie79/nonbio/nonbiotestMovie79.xlsx'},
    {'name': 'movies/movie0007/allnonbio/clip000265.mp4', 'path': 'movies/movie0007/allnonbio/clip000265.mp4'},
    {'name': 'movies/movie0048/allnonbio/clip000219.mp4', 'path': 'movies/movie0048/allnonbio/clip000219.mp4'},
    {'name': 'movies/movie0004/allnonbio/clip000998.mp4', 'path': 'movies/movie0004/allnonbio/clip000998.mp4'},
    {'name': 'movies/movie0013/allnonbio/clip000231.mp4', 'path': 'movies/movie0013/allnonbio/clip000231.mp4'},
    {'name': 'movies/movie0016/testnonbio/clip000328.mp4', 'path': 'movies/movie0016/testnonbio/clip000328.mp4'},
    {'name': 'movies/movie0044/allbio/clip000417.mp4', 'path': 'movies/movie0044/allbio/clip000417.mp4'},
    {'name': 'movies/movie0016/testnonbio/clip000177.mp4', 'path': 'movies/movie0016/testnonbio/clip000177.mp4'},
    {'name': 'movies/movie0001/allbio/clip000210.mp4', 'path': 'movies/movie0001/allbio/clip000210.mp4'},
    {'name': 'movies/movie0041/allnonbio/clip000760.mp4', 'path': 'movies/movie0041/allnonbio/clip000760.mp4'},
    {'name': 'moviesDirections/movie79/bio/testbioMovie79.xlsx', 'path': 'moviesDirections/movie79/bio/testbioMovie79.xlsx'},
    {'name': 'movies/movie0016/testbio/clip000400.mp4', 'path': 'movies/movie0016/testbio/clip000400.mp4'},
    {'name': 'moviesDirections/movie102/nonbio/nonbioMovie102.xlsx', 'path': 'moviesDirections/movie102/nonbio/nonbioMovie102.xlsx'},
    {'name': 'movies/movie0016/allnonbio/clip000471.mp4', 'path': 'movies/movie0016/allnonbio/clip000471.mp4'},
    {'name': 'movies/movie0006/allnonbio/clip000033.mp4', 'path': 'movies/movie0006/allnonbio/clip000033.mp4'},
    {'name': 'movies/movie0030/allbio/clip000260.mp4', 'path': 'movies/movie0030/allbio/clip000260.mp4'},
    {'name': 'movies/movie0079/allnonbio/clip000232.mp4', 'path': 'movies/movie0079/allnonbio/clip000232.mp4'},
    {'name': 'movies/movie0018/allbio/clip000559.mp4', 'path': 'movies/movie0018/allbio/clip000559.mp4'},
    {'name': 'movies/movie0049/allnonbio/clip000839.mp4', 'path': 'movies/movie0049/allnonbio/clip000839.mp4'},
    {'name': 'movies/movie0044/allnonbio/clip000001.mp4', 'path': 'movies/movie0044/allnonbio/clip000001.mp4'},
    {'name': 'moviesDirections/movie13/nonbio/nonbiotestMovie13.xlsx', 'path': 'moviesDirections/movie13/nonbio/nonbiotestMovie13.xlsx'},
    {'name': 'moviesDirections/movie6/bio/testbioMovie6.xlsx', 'path': 'moviesDirections/movie6/bio/testbioMovie6.xlsx'},
    {'name': 'movies/movie0048/allnonbio/clip000589.mp4', 'path': 'movies/movie0048/allnonbio/clip000589.mp4'},
    {'name': 'movies/movie0020/allnonbio/clip000001.mp4', 'path': 'movies/movie0020/allnonbio/clip000001.mp4'},
    {'name': 'movies/movie0020/allnonbio/clip000567.mp4', 'path': 'movies/movie0020/allnonbio/clip000567.mp4'},
    {'name': 'movies/movie0102/allnonbio/clip000003.mp4', 'path': 'movies/movie0102/allnonbio/clip000003.mp4'},
    {'name': 'movies/movie0045/allnonbio/clip000514.mp4', 'path': 'movies/movie0045/allnonbio/clip000514.mp4'},
    {'name': 'movies/movie0018/allnonbio/clip000008.mp4', 'path': 'movies/movie0018/allnonbio/clip000008.mp4'},
    {'name': 'movies/movie0032/allnonbio/clip000164.mp4', 'path': 'movies/movie0032/allnonbio/clip000164.mp4'},
    {'name': 'movies/movie0102/allnonbio/clip000289.mp4', 'path': 'movies/movie0102/allnonbio/clip000289.mp4'},
    {'name': 'movies/movie0013/allnonbio/clip000064.mp4', 'path': 'movies/movie0013/allnonbio/clip000064.mp4'},
    {'name': 'movies/movie0018/allnonbio/clip000023.mp4', 'path': 'movies/movie0018/allnonbio/clip000023.mp4'},
    {'name': 'moviesDirections/movie1/nonbio/nonbioMovie1.xlsx', 'path': 'moviesDirections/movie1/nonbio/nonbioMovie1.xlsx'},
    {'name': 'movies/movie0016/allbio/clip000411.mp4', 'path': 'movies/movie0016/allbio/clip000411.mp4'},
    {'name': 'movies/movie0044/allnonbio/clip000265.mp4', 'path': 'movies/movie0044/allnonbio/clip000265.mp4'},
    {'name': 'movies/movie0102/allnonbio/clip000170.mp4', 'path': 'movies/movie0102/allnonbio/clip000170.mp4'},
    {'name': 'moviesDirections/movie120/bio/testbioMovie120.xlsx', 'path': 'moviesDirections/movie120/bio/testbioMovie120.xlsx'},
    {'name': 'movies/movie0048/allnonbio/clip000039.mp4', 'path': 'movies/movie0048/allnonbio/clip000039.mp4'},
    {'name': 'moviesDirections/movie30/nonbio/nonbioMovie30.xlsx', 'path': 'moviesDirections/movie30/nonbio/nonbioMovie30.xlsx'},
    {'name': 'movies/movie0020/allbio/clip000495.mp4', 'path': 'movies/movie0020/allbio/clip000495.mp4'},
    {'name': 'movies/movie0041/allbio/clip000709.mp4', 'path': 'movies/movie0041/allbio/clip000709.mp4'},
    {'name': 'movies/movie0006/testnonbio/clip000730.mp4', 'path': 'movies/movie0006/testnonbio/clip000730.mp4'},
    {'name': 'movies/movie0120/allnonbio/clip000017.mp4', 'path': 'movies/movie0120/allnonbio/clip000017.mp4'},
    {'name': 'movies/movie0004/allbio/clip000629.mp4', 'path': 'movies/movie0004/allbio/clip000629.mp4'},
    {'name': 'movies/movie0079/allnonbio/clip000194.mp4', 'path': 'movies/movie0079/allnonbio/clip000194.mp4'},
    {'name': 'movies/movie0018/allnonbio/clip000028.mp4', 'path': 'movies/movie0018/allnonbio/clip000028.mp4'},
    {'name': 'movies/movie0001/allbio/clip000413.mp4', 'path': 'movies/movie0001/allbio/clip000413.mp4'},
    {'name': 'movies/movie0041/allnonbio/clip000697.mp4', 'path': 'movies/movie0041/allnonbio/clip000697.mp4'},
    {'name': 'moviesDirections/movie26/bio/testbioMovie26.xlsx', 'path': 'moviesDirections/movie26/bio/testbioMovie26.xlsx'},
    {'name': 'movies/movie0004/allbio/clip000530.mp4', 'path': 'movies/movie0004/allbio/clip000530.mp4'},
    {'name': 'movies/movie0045/allnonbio/clip000475.mp4', 'path': 'movies/movie0045/allnonbio/clip000475.mp4'},
    {'name': 'movies/practicemovie/allbio/clip000068.mp4', 'path': 'movies/practicemovie/allbio/clip000068.mp4'},
    {'name': 'movies/movie0045/allbio/clip000374.mp4', 'path': 'movies/movie0045/allbio/clip000374.mp4'},
    {'name': 'movies/movie0045/allbio/clip000728.mp4', 'path': 'movies/movie0045/allbio/clip000728.mp4'},
    {'name': 'movies/movie0026/allbio/clip000311.mp4', 'path': 'movies/movie0026/allbio/clip000311.mp4'},
    {'name': 'movies/movie0048/allnonbio/clip000654.mp4', 'path': 'movies/movie0048/allnonbio/clip000654.mp4'},
    {'name': 'movies/movie0006/allnonbio/clip000241.mp4', 'path': 'movies/movie0006/allnonbio/clip000241.mp4'},
    {'name': 'movies/movie0013/allbio/clip000430.mp4', 'path': 'movies/movie0013/allbio/clip000430.mp4'},
    {'name': 'movies/movie0120/allbio/clip000338.mp4', 'path': 'movies/movie0120/allbio/clip000338.mp4'},
    {'name': 'movies/movie0020/allbio/clip000684.mp4', 'path': 'movies/movie0020/allbio/clip000684.mp4'},
    {'name': 'movies/movie0020/allbio/clip000547.mp4', 'path': 'movies/movie0020/allbio/clip000547.mp4'},
    {'name': 'movies/movie0006/testnonbio/clip000116.mp4', 'path': 'movies/movie0006/testnonbio/clip000116.mp4'},
    {'name': 'movies/movie0079/allnonbio/clip000164.mp4', 'path': 'movies/movie0079/allnonbio/clip000164.mp4'},
    {'name': 'moviesDirections/movie20/nonbio/nonbioMovie20.xlsx', 'path': 'moviesDirections/movie20/nonbio/nonbioMovie20.xlsx'},
    {'name': 'movies/movie0007/allnonbio/clip000196.mp4', 'path': 'movies/movie0007/allnonbio/clip000196.mp4'},
    {'name': 'moviesDirections/movie13/nonbio/nonbioMovie13.xlsx', 'path': 'moviesDirections/movie13/nonbio/nonbioMovie13.xlsx'},
    {'name': 'movies/movie0016/allbio/clip000531.mp4', 'path': 'movies/movie0016/allbio/clip000531.mp4'},
    {'name': 'movies/movie0045/allbio/clip000562.mp4', 'path': 'movies/movie0045/allbio/clip000562.mp4'},
    {'name': 'movies/movie0004/allnonbio/clip001140.mp4', 'path': 'movies/movie0004/allnonbio/clip001140.mp4'},
    {'name': 'movies/movie0016/testbio/clip000531.mp4', 'path': 'movies/movie0016/testbio/clip000531.mp4'},
    {'name': 'movies/movie0007/allnonbio/clip000112.mp4', 'path': 'movies/movie0007/allnonbio/clip000112.mp4'},
    {'name': 'movies/movie0032/allbio/clip000122.mp4', 'path': 'movies/movie0032/allbio/clip000122.mp4'},
    {'name': 'moviesDirections/movie6/bio/bioMovie6.xlsx', 'path': 'moviesDirections/movie6/bio/bioMovie6.xlsx'},
    {'name': 'movies/movie0044/allnonbio/clip000180.mp4', 'path': 'movies/movie0044/allnonbio/clip000180.mp4'},
    {'name': 'movies/movie0079/allbio/clip000335.mp4', 'path': 'movies/movie0079/allbio/clip000335.mp4'},
    {'name': 'movies/movie0102/allbio/clip000803.mp4', 'path': 'movies/movie0102/allbio/clip000803.mp4'},
    {'name': 'movies/movie0079/allbio/clip000268.mp4', 'path': 'movies/movie0079/allbio/clip000268.mp4'},
    {'name': 'movies/movie0018/allbio/clip000560.mp4', 'path': 'movies/movie0018/allbio/clip000560.mp4'},
    {'name': 'moviesDirections/movie7/bio/bioMovie7.xlsx', 'path': 'moviesDirections/movie7/bio/bioMovie7.xlsx'},
    {'name': 'movies/movie0007/allbio/clip000288.mp4', 'path': 'movies/movie0007/allbio/clip000288.mp4'},
    {'name': 'movies/movie0007/allnonbio/clip000210.mp4', 'path': 'movies/movie0007/allnonbio/clip000210.mp4'},
    {'name': 'movies/movie0045/allnonbio/clip000355.mp4', 'path': 'movies/movie0045/allnonbio/clip000355.mp4'},
    {'name': 'movies/movie0102/allnonbio/clip000387.mp4', 'path': 'movies/movie0102/allnonbio/clip000387.mp4'},
    {'name': 'movies/movie0007/allbio/clip000389.mp4', 'path': 'movies/movie0007/allbio/clip000389.mp4'},
    {'name': 'moviesDirections/movie1/bio/bioMovie1.xlsx', 'path': 'moviesDirections/movie1/bio/bioMovie1.xlsx'},
    {'name': 'movies/movie0120/allnonbio/clip000118.mp4', 'path': 'movies/movie0120/allnonbio/clip000118.mp4'},
    {'name': 'movies/movie0026/allnonbio/clip000136.mp4', 'path': 'movies/movie0026/allnonbio/clip000136.mp4'},
    {'name': 'movies/movie0102/allbio/clip001045.mp4', 'path': 'movies/movie0102/allbio/clip001045.mp4'},
    {'name': 'movies/movie0111/allbio/clip000114.mp4', 'path': 'movies/movie0111/allbio/clip000114.mp4'},
    {'name': 'movies/movie0004/allnonbio/clip000969.mp4', 'path': 'movies/movie0004/allnonbio/clip000969.mp4'},
    {'name': 'movies/movie0032/allbio/clip000350.mp4', 'path': 'movies/movie0032/allbio/clip000350.mp4'},
    {'name': 'movies/movie0013/allnonbio/clip000058.mp4', 'path': 'movies/movie0013/allnonbio/clip000058.mp4'},
    {'name': 'movies/movie0120/allnonbio/clip000418.mp4', 'path': 'movies/movie0120/allnonbio/clip000418.mp4'},
    {'name': 'movies/movie0049/allbio/clip000971.mp4', 'path': 'movies/movie0049/allbio/clip000971.mp4'},
    {'name': 'moviesDirections/movie7/nonbio/nonbioMovie7.xlsx', 'path': 'moviesDirections/movie7/nonbio/nonbioMovie7.xlsx'},
    {'name': 'movies/movie0032/allnonbio/clip000135.mp4', 'path': 'movies/movie0032/allnonbio/clip000135.mp4'},
    {'name': 'movies/movie0079/allbio/clip000666.mp4', 'path': 'movies/movie0079/allbio/clip000666.mp4'},
    {'name': 'movies/movie0111/allnonbio/clip000983.mp4', 'path': 'movies/movie0111/allnonbio/clip000983.mp4'},
    {'name': 'moviesDirections/movie18/bio/testbioMovie18.xlsx', 'path': 'moviesDirections/movie18/bio/testbioMovie18.xlsx'},
    {'name': 'movies/movie0048/allnonbio/clip000192.mp4', 'path': 'movies/movie0048/allnonbio/clip000192.mp4'},
    {'name': 'movies/movie0007/testbio/clip000220.mp4', 'path': 'movies/movie0007/testbio/clip000220.mp4'},
    {'name': 'movies/movie0020/allnonbio/clip000497.mp4', 'path': 'movies/movie0020/allnonbio/clip000497.mp4'},
    {'name': 'movies/movie0044/allbio/clip000079.mp4', 'path': 'movies/movie0044/allbio/clip000079.mp4'},
    {'name': 'movies/movie0111/allbio/clip000602.mp4', 'path': 'movies/movie0111/allbio/clip000602.mp4'},
    {'name': 'movies/movie0120/allnonbio/clip000015.mp4', 'path': 'movies/movie0120/allnonbio/clip000015.mp4'},
    {'name': 'moviesDirections/movie13/bio/bioMovie13.xlsx', 'path': 'moviesDirections/movie13/bio/bioMovie13.xlsx'},
    {'name': 'movies/practicemovie/allbio/clip000487.mp4', 'path': 'movies/practicemovie/allbio/clip000487.mp4'},
    {'name': 'movies/movie0016/testbio/clip000765.mp4', 'path': 'movies/movie0016/testbio/clip000765.mp4'},
    {'name': 'movies/movie0030/allbio/clip000008.mp4', 'path': 'movies/movie0030/allbio/clip000008.mp4'},
    {'name': 'movies/movie0016/allnonbio/clip000174.mp4', 'path': 'movies/movie0016/allnonbio/clip000174.mp4'},
    {'name': 'movies/movie0079/allnonbio/clip000173.mp4', 'path': 'movies/movie0079/allnonbio/clip000173.mp4'},
    {'name': 'movies/movie0020/allbio/clip001037.mp4', 'path': 'movies/movie0020/allbio/clip001037.mp4'},
    {'name': 'movies/movie0016/allbio/clip000684.mp4', 'path': 'movies/movie0016/allbio/clip000684.mp4'},
    {'name': 'movies/movie0001/allnonbio/clip000553.mp4', 'path': 'movies/movie0001/allnonbio/clip000553.mp4'},
    {'name': 'moviesDirections/movie32/bio/testbioMovie32.xlsx', 'path': 'moviesDirections/movie32/bio/testbioMovie32.xlsx'},
    {'name': 'moviesDirections/movie30/bio/bioMovie30.xlsx', 'path': 'moviesDirections/movie30/bio/bioMovie30.xlsx'},
    {'name': 'moviesDirections/movie111/nonbio/nonbioMovie111.xlsx', 'path': 'moviesDirections/movie111/nonbio/nonbioMovie111.xlsx'},
    {'name': 'movies/movie0044/allbio/clip000036.mp4', 'path': 'movies/movie0044/allbio/clip000036.mp4'},
    {'name': 'movies/movie0013/allbio/clip000504.mp4', 'path': 'movies/movie0013/allbio/clip000504.mp4'},
    {'name': 'movies/movie0120/allnonbio/clip000137.mp4', 'path': 'movies/movie0120/allnonbio/clip000137.mp4'},
    {'name': 'movies/movie0006/allnonbio/clip000109.mp4', 'path': 'movies/movie0006/allnonbio/clip000109.mp4'},
    {'name': 'movies/movie0018/testnonbio/clip000057.mp4', 'path': 'movies/movie0018/testnonbio/clip000057.mp4'},
    {'name': 'movies/movie0049/allbio/clip000880.mp4', 'path': 'movies/movie0049/allbio/clip000880.mp4'},
    {'name': 'movies/movie0013/allbio/clip000301.mp4', 'path': 'movies/movie0013/allbio/clip000301.mp4'},
    {'name': 'movies/movie0030/allbio/clip000481.mp4', 'path': 'movies/movie0030/allbio/clip000481.mp4'},
    {'name': 'moviesDirections/movie44/nonbio/nonbioMovie44.xlsx', 'path': 'moviesDirections/movie44/nonbio/nonbioMovie44.xlsx'},
    {'name': 'movies/movie0001/allnonbio/clip000557.mp4', 'path': 'movies/movie0001/allnonbio/clip000557.mp4'},
    {'name': 'movies/movie0111/allnonbio/clip000025.mp4', 'path': 'movies/movie0111/allnonbio/clip000025.mp4'},
    {'name': 'moviesDirections/movie20/bio/testbioMovie20.xlsx', 'path': 'moviesDirections/movie20/bio/testbioMovie20.xlsx'},
    {'name': 'movies/movie0111/allnonbio/clip000342.mp4', 'path': 'movies/movie0111/allnonbio/clip000342.mp4'},
    {'name': 'moviesDirections/movie20/bio/bioMovie20.xlsx', 'path': 'moviesDirections/movie20/bio/bioMovie20.xlsx'},
    {'name': 'movies/movie0018/testbio/clip000559.mp4', 'path': 'movies/movie0018/testbio/clip000559.mp4'},
    {'name': 'moviesDirections/movie4/nonbio/nonbiotestMovie4.xlsx', 'path': 'moviesDirections/movie4/nonbio/nonbiotestMovie4.xlsx'},
    {'name': 'moviesDirections/movie48/nonbio/nonbiotestMovie48.xlsx', 'path': 'moviesDirections/movie48/nonbio/nonbiotestMovie48.xlsx'},
    {'name': 'movies/movie0049/allnonbio/clip000020.mp4', 'path': 'movies/movie0049/allnonbio/clip000020.mp4'},
    {'name': 'movies/movie0049/allbio/clip000595.mp4', 'path': 'movies/movie0049/allbio/clip000595.mp4'},
    {'name': 'movies/movie0016/allbio/clip000765.mp4', 'path': 'movies/movie0016/allbio/clip000765.mp4'},
    {'name': 'moviesDirections/movie120/bio/bioMovie120.xlsx', 'path': 'moviesDirections/movie120/bio/bioMovie120.xlsx'},
    {'name': 'movies/movie0020/allnonbio/clip000501.mp4', 'path': 'movies/movie0020/allnonbio/clip000501.mp4'},
    {'name': 'movies/movie0026/allnonbio/clip000175.mp4', 'path': 'movies/movie0026/allnonbio/clip000175.mp4'},
    {'name': 'movies/movie0079/allnonbio/clip000204.mp4', 'path': 'movies/movie0079/allnonbio/clip000204.mp4'},
    {'name': 'movies/movie0013/allbio/clip000341.mp4', 'path': 'movies/movie0013/allbio/clip000341.mp4'},
    {'name': 'movies/movie0032/allnonbio/clip000365.mp4', 'path': 'movies/movie0032/allnonbio/clip000365.mp4'},
    {'name': 'movies/movie0016/testnonbio/clip000044.mp4', 'path': 'movies/movie0016/testnonbio/clip000044.mp4'},
    {'name': 'movies/movie0006/allbio/clip000661.mp4', 'path': 'movies/movie0006/allbio/clip000661.mp4'},
    {'name': 'movies/movie0111/allnonbio/clip000291.mp4', 'path': 'movies/movie0111/allnonbio/clip000291.mp4'},
    {'name': 'movies/movie0018/allbio/clip000462.mp4', 'path': 'movies/movie0018/allbio/clip000462.mp4'},
    {'name': 'movies/movie0004/allnonbio/clip001134.mp4', 'path': 'movies/movie0004/allnonbio/clip001134.mp4'},
    {'name': 'moviesDirections/movie18/nonbio/nonbiotestMovie18.xlsx', 'path': 'moviesDirections/movie18/nonbio/nonbiotestMovie18.xlsx'},
    {'name': 'movies/movie0030/allnonbio/clip000227.mp4', 'path': 'movies/movie0030/allnonbio/clip000227.mp4'},
    {'name': 'movies/movie0030/allbio/clip000171.mp4', 'path': 'movies/movie0030/allbio/clip000171.mp4'},
    {'name': 'movies/movie0020/allnonbio/clip001164.mp4', 'path': 'movies/movie0020/allnonbio/clip001164.mp4'},
    {'name': 'moviesDirections/movie44/bio/bioMovie44.xlsx', 'path': 'moviesDirections/movie44/bio/bioMovie44.xlsx'},
    {'name': 'movies/movie0049/allbio/clip000058.mp4', 'path': 'movies/movie0049/allbio/clip000058.mp4'},
    {'name': 'moviesDirections/movie45/bio/testbioMovie45.xlsx', 'path': 'moviesDirections/movie45/bio/testbioMovie45.xlsx'},
    {'name': 'movies/movie0007/allbio/clip000079.mp4', 'path': 'movies/movie0007/allbio/clip000079.mp4'},
    {'name': 'movies/movie0004/allbio/clip000890.mp4', 'path': 'movies/movie0004/allbio/clip000890.mp4'},
    {'name': 'movies/movie0120/allbio/clip000395.mp4', 'path': 'movies/movie0120/allbio/clip000395.mp4'},
    {'name': 'movies/movie0111/allnonbio/clip000054.mp4', 'path': 'movies/movie0111/allnonbio/clip000054.mp4'},
    {'name': 'movies/movie0016/testbio/clip000811.mp4', 'path': 'movies/movie0016/testbio/clip000811.mp4'},
    {'name': 'movies/movie0004/allnonbio/clip001055.mp4', 'path': 'movies/movie0004/allnonbio/clip001055.mp4'},
    {'name': 'movies/movie0048/allnonbio/clip000202.mp4', 'path': 'movies/movie0048/allnonbio/clip000202.mp4'},
    {'name': 'movies/movie0006/allnonbio/clip000866.mp4', 'path': 'movies/movie0006/allnonbio/clip000866.mp4'},
    {'name': 'movies/movie0018/allnonbio/clip000054.mp4', 'path': 'movies/movie0018/allnonbio/clip000054.mp4'},
    {'name': 'movies/movie0049/allnonbio/clip000647.mp4', 'path': 'movies/movie0049/allnonbio/clip000647.mp4'},
    {'name': 'movies/movie0006/allbio/clip000115.mp4', 'path': 'movies/movie0006/allbio/clip000115.mp4'},
    {'name': 'moviesDirections/movie102/bio/bioMovie102.xlsx', 'path': 'moviesDirections/movie102/bio/bioMovie102.xlsx'},
    {'name': 'movies/movie0032/allnonbio/clip000235.mp4', 'path': 'movies/movie0032/allnonbio/clip000235.mp4'},
    {'name': 'movies/movie0026/allbio/clip000255.mp4', 'path': 'movies/movie0026/allbio/clip000255.mp4'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.2.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var welcomingClock;
var msgcons;
var msgcons2;
var text_10;
var text_11;
var key_resp_5;
var instructionsClock;
var msg;
var msg2;
var text_5;
var text_6;
var key_resp_3;
var crossClock;
var polygon;
var practice_testClock;
var noise_picClock;
var image;
var practice_questionClock;
var text_3;
var practice_mainClock;
var text_4;
var key_resp_2;
var main_block_endClock;
var text_7;
var text_8;
var key_resp_4;
var cross_2Clock;
var polygon_2;
var testClock;
var noise_pic_2Clock;
var image_2;
var questionClock;
var text;
var mainClock;
var text_2;
var key_resp;
var byeClock;
var text_9;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "welcoming"
  welcomingClock = new util.Clock();
  msgcons = (("\u03a8 Ay\u015fe \u015eim\u015fek ve asistanlar\u0131 taraf\u0131ndan y\u00fcr\u00fct\u00fclen bu \u00e7al\u0131\u015fmaya kat\u0131l\u0131mc\u0131 olarak davet edildiniz (ayse.simsek@yasar.edu.tr)." + "\n\n") + "\u03a8 Bu bilgilendirme size bu \u00e7al\u0131\u015fmaya kat\u0131lma konusunda karar vermenize yard\u0131mc\u0131 olmak i\u00e7in haz\u0131rlanm\u0131\u015ft\u0131r.");
  msgcons2 = "Devam Et \u2192";
  
  text_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_10',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: 1.2, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_11',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.32)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  msg = (((("\u03a8 Bu k\u0131s\u0131m bir deneme k\u0131sm\u0131d\u0131r." + "\n\n") + "\u03a8 Deneye haz\u0131rlanman\u0131z i\u00e7in tasarlanm\u0131\u015ft\u0131r.") + "\n\n") + "\u03a8 Burada yapman\u0131z gereken \u015fey deney s\u0131ras\u0131nda yapman\u0131z gerekenle ayn\u0131d\u0131r.");
  msg2 = "Devam Et \u2192";
  
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: 1.2, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.32)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "cross"
  crossClock = new util.Clock();
  polygon = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon', 
    vertices: 'cross', size:[0.04, 0.04],
    ori: 0.0, pos: [0, 0],
    lineWidth: 0.15, lineColor: new util.Color('black'),
    fillColor: new util.Color('black'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  // Initialize components for Routine "practice_test"
  practice_testClock = new util.Clock();
  // Initialize components for Routine "noise_pic"
  noise_picClock = new util.Clock();
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : 'pix', 
    image : 'TheImage.jpg', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [256, 256],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "practice_question"
  practice_questionClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'Bu klipleri gördünüz mü?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.06,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "practice_main"
  practice_mainClock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: '\n   ←                                           →\nHayır                                      Evet',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.038,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "main_block_end"
  main_block_endClock = new util.Clock();
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: 'Ψ Bu kısmı tamamladınız. \n\nΨ Hazır hissettiğinizde "Boşluk" tuşuna basarak deneye devam edebilirsiniz.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: 1.2, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_8',
    text: 'Deneye devam etmek için BOŞLUK tuşuna basın.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "cross_2"
  cross_2Clock = new util.Clock();
  polygon_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_2', 
    vertices: 'cross', size:[0.04, 0.04],
    ori: 0.0, pos: [0, 0],
    lineWidth: 0.15, lineColor: new util.Color('black'),
    fillColor: new util.Color('black'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  // Initialize components for Routine "test"
  testClock = new util.Clock();
  // Initialize components for Routine "noise_pic_2"
  noise_pic_2Clock = new util.Clock();
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : 'pix', 
    image : 'TheImage.jpg', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [256, 256],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "question"
  questionClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Bu klipleri gördünüz mü?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.06,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "main"
  mainClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '\n   ←                                           →\nHayır                                      Evet',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.038,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "bye"
  byeClock = new util.Clock();
  text_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_9',
    text: 'Deneye katılım sağladığınız için teşekkür ederiz.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: 1.2, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var baslangic;
var currentLoop;
function baslangicLoopBegin(baslangicLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    baslangic = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 50, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'baslangic'
    });
    psychoJS.experiment.addLoop(baslangic); // add the loop to the experiment
    currentLoop = baslangic;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisBaslangic of baslangic) {
      const snapshot = baslangic.getSnapshot();
      baslangicLoopScheduler.add(importConditions(snapshot));
      baslangicLoopScheduler.add(welcomingRoutineBegin(snapshot));
      baslangicLoopScheduler.add(welcomingRoutineEachFrame());
      baslangicLoopScheduler.add(welcomingRoutineEnd());
      baslangicLoopScheduler.add(endLoopIteration(baslangicLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function baslangicLoopEnd() {
  psychoJS.experiment.removeLoop(baslangic);

  return Scheduler.Event.NEXT;
}


var intro;
function introLoopBegin(introLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    intro = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 50, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'intro'
    });
    psychoJS.experiment.addLoop(intro); // add the loop to the experiment
    currentLoop = intro;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisIntro of intro) {
      const snapshot = intro.getSnapshot();
      introLoopScheduler.add(importConditions(snapshot));
      introLoopScheduler.add(instructionsRoutineBegin(snapshot));
      introLoopScheduler.add(instructionsRoutineEachFrame());
      introLoopScheduler.add(instructionsRoutineEnd());
      introLoopScheduler.add(endLoopIteration(introLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function introLoopEnd() {
  psychoJS.experiment.removeLoop(intro);

  return Scheduler.Event.NEXT;
}


var maybeprac;
function maybepracLoopBegin(maybepracLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    maybeprac = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.FULLRANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'maybeprac'
    });
    psychoJS.experiment.addLoop(maybeprac); // add the loop to the experiment
    currentLoop = maybeprac;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisMaybeprac of maybeprac) {
      const snapshot = maybeprac.getSnapshot();
      maybepracLoopScheduler.add(importConditions(snapshot));
      maybepracLoopScheduler.add(crossRoutineBegin(snapshot));
      maybepracLoopScheduler.add(crossRoutineEachFrame());
      maybepracLoopScheduler.add(crossRoutineEnd());
      const trials_2LoopScheduler = new Scheduler(psychoJS);
      maybepracLoopScheduler.add(trials_2LoopBegin(trials_2LoopScheduler, snapshot));
      maybepracLoopScheduler.add(trials_2LoopScheduler);
      maybepracLoopScheduler.add(trials_2LoopEnd);
      maybepracLoopScheduler.add(noise_picRoutineBegin(snapshot));
      maybepracLoopScheduler.add(noise_picRoutineEachFrame());
      maybepracLoopScheduler.add(noise_picRoutineEnd());
      maybepracLoopScheduler.add(practice_questionRoutineBegin(snapshot));
      maybepracLoopScheduler.add(practice_questionRoutineEachFrame());
      maybepracLoopScheduler.add(practice_questionRoutineEnd());
      const trials_3LoopScheduler = new Scheduler(psychoJS);
      maybepracLoopScheduler.add(trials_3LoopBegin(trials_3LoopScheduler, snapshot));
      maybepracLoopScheduler.add(trials_3LoopScheduler);
      maybepracLoopScheduler.add(trials_3LoopEnd);
      maybepracLoopScheduler.add(endLoopIteration(maybepracLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials_2;
function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.FULLRANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'moviesDirections/practivemovie/testbioMoviePractice.xlsx',
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_2 of trials_2) {
      const snapshot = trials_2.getSnapshot();
      trials_2LoopScheduler.add(importConditions(snapshot));
      trials_2LoopScheduler.add(practice_testRoutineBegin(snapshot));
      trials_2LoopScheduler.add(practice_testRoutineEachFrame());
      trials_2LoopScheduler.add(practice_testRoutineEnd());
      trials_2LoopScheduler.add(endLoopIteration(trials_2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_2LoopEnd() {
  psychoJS.experiment.removeLoop(trials_2);

  return Scheduler.Event.NEXT;
}


var trials_3;
function trials_3LoopBegin(trials_3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'moviesDirections/practivemovie/bioMoviePractice.xlsx',
      seed: undefined, name: 'trials_3'
    });
    psychoJS.experiment.addLoop(trials_3); // add the loop to the experiment
    currentLoop = trials_3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_3 of trials_3) {
      const snapshot = trials_3.getSnapshot();
      trials_3LoopScheduler.add(importConditions(snapshot));
      trials_3LoopScheduler.add(crossRoutineBegin(snapshot));
      trials_3LoopScheduler.add(crossRoutineEachFrame());
      trials_3LoopScheduler.add(crossRoutineEnd());
      trials_3LoopScheduler.add(practice_mainRoutineBegin(snapshot));
      trials_3LoopScheduler.add(practice_mainRoutineEachFrame());
      trials_3LoopScheduler.add(practice_mainRoutineEnd());
      trials_3LoopScheduler.add(endLoopIteration(trials_3LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_3LoopEnd() {
  psychoJS.experiment.removeLoop(trials_3);

  return Scheduler.Event.NEXT;
}


async function maybepracLoopEnd() {
  psychoJS.experiment.removeLoop(maybeprac);

  return Scheduler.Event.NEXT;
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.FULLRANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'all_movies.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      const snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(cross_2RoutineBegin(snapshot));
      trialsLoopScheduler.add(cross_2RoutineEachFrame());
      trialsLoopScheduler.add(cross_2RoutineEnd());
      const test_trialsLoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(test_trialsLoopBegin(test_trialsLoopScheduler, snapshot));
      trialsLoopScheduler.add(test_trialsLoopScheduler);
      trialsLoopScheduler.add(test_trialsLoopEnd);
      trialsLoopScheduler.add(noise_pic_2RoutineBegin(snapshot));
      trialsLoopScheduler.add(noise_pic_2RoutineEachFrame());
      trialsLoopScheduler.add(noise_pic_2RoutineEnd());
      trialsLoopScheduler.add(questionRoutineBegin(snapshot));
      trialsLoopScheduler.add(questionRoutineEachFrame());
      trialsLoopScheduler.add(questionRoutineEnd());
      const main_trialsLoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(main_trialsLoopBegin(main_trialsLoopScheduler, snapshot));
      trialsLoopScheduler.add(main_trialsLoopScheduler);
      trialsLoopScheduler.add(main_trialsLoopEnd);
      trialsLoopScheduler.add(main_block_endRoutineBegin(snapshot));
      trialsLoopScheduler.add(main_block_endRoutineEachFrame());
      trialsLoopScheduler.add(main_block_endRoutineEnd());
      trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var test_trials;
function test_trialsLoopBegin(test_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    test_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.FULLRANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: testClips,
      seed: undefined, name: 'test_trials'
    });
    psychoJS.experiment.addLoop(test_trials); // add the loop to the experiment
    currentLoop = test_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTest_trial of test_trials) {
      const snapshot = test_trials.getSnapshot();
      test_trialsLoopScheduler.add(importConditions(snapshot));
      test_trialsLoopScheduler.add(testRoutineBegin(snapshot));
      test_trialsLoopScheduler.add(testRoutineEachFrame());
      test_trialsLoopScheduler.add(testRoutineEnd());
      test_trialsLoopScheduler.add(endLoopIteration(test_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function test_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(test_trials);

  return Scheduler.Event.NEXT;
}


var main_trials;
function main_trialsLoopBegin(main_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    main_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.FULLRANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: allClips,
      seed: undefined, name: 'main_trials'
    });
    psychoJS.experiment.addLoop(main_trials); // add the loop to the experiment
    currentLoop = main_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisMain_trial of main_trials) {
      const snapshot = main_trials.getSnapshot();
      main_trialsLoopScheduler.add(importConditions(snapshot));
      main_trialsLoopScheduler.add(crossRoutineBegin(snapshot));
      main_trialsLoopScheduler.add(crossRoutineEachFrame());
      main_trialsLoopScheduler.add(crossRoutineEnd());
      main_trialsLoopScheduler.add(mainRoutineBegin(snapshot));
      main_trialsLoopScheduler.add(mainRoutineEachFrame());
      main_trialsLoopScheduler.add(mainRoutineEnd());
      main_trialsLoopScheduler.add(endLoopIteration(main_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function main_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(main_trials);

  return Scheduler.Event.NEXT;
}


async function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var add_to_this2;
var _key_resp_5_allKeys;
var welcomingComponents;
function welcomingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'welcoming'-------
    t = 0;
    welcomingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    
    if ((add_to_this2 === 2)) {
        msgcons = (("\u03a8 Bu \u00e7al\u0131\u015fma, g\u00f6r\u00fc\u015f zamanlamas\u0131 ile ilgilidir." + "\n\n") + "\u03a8 Deney esnas\u0131nda farkl\u0131 filmlerden farkl\u0131 klipler g\u00f6recek ve sorulan sorulara g\u00f6re cevap vermeniz istenecektir.");
        msgcons2 = "Devam Et \u2192";
    } else {
        if ((add_to_this2 === 3)) {
            msgcons = (((("\u03a8 Bu \u00e7al\u0131\u015fmaya kat\u0131lmak tamamen g\u00f6n\u00fcll\u00fcl\u00fck esas\u0131na dayanmaktad\u0131r." + "\n\n") + "\u03a8 \u00c7al\u0131\u015fmaya kat\u0131lman\u0131n herhangi olumsuz bir sonucu yoktur ve kat\u0131lmak istememeniz Ya\u015far \u00dcniversitesi ile ili\u015fkilerinizi etkilemeyecektir.") + "\n\n") + "\u03a8 \u00c7al\u0131\u015fman\u0131n herhangi bir a\u015famas\u0131nda \u00e7al\u0131\u015fmay\u0131 terk etme hakk\u0131n\u0131z bulunmaktad\u0131r.");
        } else {
            if ((add_to_this2 === 4)) {
                msgcons = (("\u03a8 Bu \u00e7al\u0131\u015fmaya kat\u0131lman\u0131n g\u00fcnl\u00fck hayatta  kar\u015f\u0131la\u015ft\u0131\u011f\u0131n\u0131zdan daha fazla bir riski  bulunmamaktad\u0131r ve kat\u0131l\u0131m risklerinin minimal olmas\u0131 beklenmektedir." + "\n\n") + "\u03a8 E\u011fer sorular\u0131n\u0131z, \u00f6nerileriniz, \u00e7al\u0131\u015fma ile ilgili \u015fikayet veya kayg\u0131lar\u0131n\u0131z varsa  Ay\u015fe Candan \u015eim\u015fek ile ileti\u015fime ge\u00e7ebilirsiniz. (ayse.simsek@yasar.edu.tr)");
            } else {
                if ((add_to_this2 === 5)) {
                    msgcons = (("\u03a8 Bu \u00e7al\u0131\u015fmada elde edilecek veriler gizli tutulacak ve isminiz anonim olarak kalacakt\u0131r." + "\n\n") + "\u03a8 Bu ara\u015ft\u0131rmaya kat\u0131lmay\u0131 g\u00f6n\u00fcll\u00fc olarak kabul ediyorsan\u0131z, BO\u015eLUK tu\u015funa bas\u0131n\u0131z.");
                    msgcons2 = "Kabul ediyorsan\u0131z BO\u015eLUK tu\u015funa bas\u0131n.";
                }
            }
        }
    }
    add_to_this2 = (add_to_this2 + 1);
    
    text_10.setText(msgcons);
    text_11.setText(msgcons2);
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    // keep track of which components have finished
    welcomingComponents = [];
    welcomingComponents.push(text_10);
    welcomingComponents.push(text_11);
    welcomingComponents.push(key_resp_5);
    
    for (const thisComponent of welcomingComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function welcomingRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'welcoming'-------
    // get current time
    t = welcomingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_10* updates
    if (t >= 0.2 && text_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_10.tStart = t;  // (not accounting for frame time here)
      text_10.frameNStart = frameN;  // exact frame index
      
      text_10.setAutoDraw(true);
    }

    
    // *text_11* updates
    if (t >= 0.2 && text_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_11.tStart = t;  // (not accounting for frame time here)
      text_11.frameNStart = frameN;  // exact frame index
      
      text_11.setAutoDraw(true);
    }

    
    // *key_resp_5* updates
    if (t >= 0.2 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }

    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: ['right', 'space'], waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of welcomingComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function welcomingRoutineEnd() {
  return async function () {
    //------Ending Routine 'welcoming'-------
    for (const thisComponent of welcomingComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if ((key_resp_5.keys === "space")) {
        baslangic.finished = true;
    }
    
    psychoJS.experiment.addData('key_resp_5.keys', key_resp_5.keys);
    if (typeof key_resp_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_5.rt', key_resp_5.rt);
        routineTimer.reset();
        }
    
    key_resp_5.stop();
    // the Routine "welcoming" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var add_to_this;
var _key_resp_3_allKeys;
var instructionsComponents;
function instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instructions'-------
    t = 0;
    instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if (((add_to_this !== 3) && (key_resp_3.keys === "right"))) {
        add_to_this = (add_to_this + 1);
    } else {
        if (((add_to_this !== 1) && (key_resp_3.keys === "left"))) {
            add_to_this = (add_to_this - 1);
        }
    }
    if ((key_resp_3.keys === "right")) {
        if ((add_to_this === 3)) {
            msg = (("\u03a8 Verdi\u011finiz cevab\u0131n do\u011frulu\u011fu kadar cevap verme h\u0131z\u0131n\u0131z da \u00f6nemlidir." + "\n\n") + "\u03a8 Bu y\u00fczden olabildi\u011fince h\u0131zl\u0131 cevap vermeniz gerekmektedir.");
            msg2 = (("\u2190 Geriye D\u00f6n" + "\n\n") + "Denemeye ba\u015flamak i\u00e7in BO\u015eLUK tu\u015funa bas\u0131n.");
        } else {
            if ((add_to_this === 2)) {
                msg = (((((("\u03a8 Ekranda \u00f6nce ayn\u0131 filme ait 5 klip art arda oynat\u0131lacak." + "\n\n") + "\u03a8 Daha sonra ayn\u0131 filmden tek tek 10 klip oynat\u0131lacakt\u0131r.") + "\n\n") + "\u03a8 Her bir klipten sonra cevap vermeniz beklenecektir.") + "\n\n") + "\u03a8 Bu klipler aras\u0131nda daha \u00f6nceki 5'lide g\u00f6rd\u00fcyseniz 'Sa\u011f Ok' tu\u015funa, g\u00f6rmediyseniz 'Sol Ok' tu\u015funa basman\u0131z beklenmektedir.");
                msg2 = "\u2190 Geriye D\u00f6n             Devam Et \u2192";
            }
        }
    } else {
        if ((key_resp_3.keys === "left")) {
            if ((add_to_this === 1)) {
                msg = (((("\u03a8 Bu k\u0131s\u0131m bir deneme k\u0131sm\u0131d\u0131r." + "\n") + "\u03a8 Deneye haz\u0131rlanman\u0131z i\u00e7in tasarlanm\u0131\u015ft\u0131r.") + "\n\n") + "\u03a8 Burada yapman\u0131z gereken \u015fey deney s\u0131ras\u0131nda yapman\u0131z gerekenle ayn\u0131d\u0131r.");
                msg2 = "Devam Et \u2192";
            } else {
                if ((add_to_this === 2)) {
                    msg = (((((("\u03a8 Ekranda \u00f6nce ayn\u0131 filme ait 5 klip art arda oynat\u0131lacak." + "\n\n") + "\u03a8 Daha sonra ayn\u0131 filmden tek tek 10 klip oynat\u0131lacakt\u0131r.") + "\n\n") + "\u03a8 Her bir klipten sonra cevap vermeniz beklenecektir.") + "\n\n") + "\u03a8 Bu klipler aras\u0131nda daha \u00f6nceki 5'lide g\u00f6rd\u00fcyseniz 'Sa\u011f Ok' tu\u015funa, g\u00f6rmediyseniz 'Sol Ok' tu\u015funa basman\u0131z beklenmektedir.");
                    msg2 = "\u2190 Geriye D\u00f6n             Devam Et \u2192";
                }
            }
        }
    }
    
    text_5.setText(msg);
    text_6.setText(msg2);
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(text_5);
    instructionsComponents.push(text_6);
    instructionsComponents.push(key_resp_3);
    
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructionsRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instructions'-------
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_5* updates
    if (t >= 0.2 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }

    
    // *text_6* updates
    if (t >= 0.2 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }

    
    // *key_resp_3* updates
    if (t >= 0.2 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }

    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['left', 'right', 'space'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionsRoutineEnd() {
  return async function () {
    //------Ending Routine 'instructions'-------
    for (const thisComponent of instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if ((key_resp_3.keys === "space")) {
        intro.finished = true;
    }
    
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var crossComponents;
function crossRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'cross'-------
    t = 0;
    crossClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.400000);
    // update component parameters for each repeat
    // keep track of which components have finished
    crossComponents = [];
    crossComponents.push(polygon);
    
    for (const thisComponent of crossComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function crossRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'cross'-------
    // get current time
    t = crossClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon* updates
    if (t >= 0.2 && polygon.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon.tStart = t;  // (not accounting for frame time here)
      polygon.frameNStart = frameN;  // exact frame index
      
      polygon.setAutoDraw(true);
    }

    frameRemains = 0.2 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of crossComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function crossRoutineEnd() {
  return async function () {
    //------Ending Routine 'cross'-------
    for (const thisComponent of crossComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var practice_movieClock;
var practice_movie;
var practice_testComponents;
function practice_testRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'practice_test'-------
    t = 0;
    practice_testClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    practice_movieClock = new util.Clock();
    practice_movie = new visual.MovieStim({
      win: psychoJS.window,
      name: 'practice_movie',
      units: undefined,
      movie: movieFile,
      pos: [0, 0],
      size: undefined,
      ori: 0.0,
      opacity: undefined,
      loop: false,
      noAudio: true,
      });
    // keep track of which components have finished
    practice_testComponents = [];
    practice_testComponents.push(practice_movie);
    
    for (const thisComponent of practice_testComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function practice_testRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'practice_test'-------
    // get current time
    t = practice_testClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *practice_movie* updates
    if (t >= 0 && practice_movie.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_movie.tStart = t;  // (not accounting for frame time here)
      practice_movie.frameNStart = frameN;  // exact frame index
      
      practice_movie.setAutoDraw(true);
      practice_movie.play();
    }

    if (practice_movie.status === PsychoJS.Status.FINISHED) {  // force-end the routine
        continueRoutine = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practice_testComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practice_testRoutineEnd() {
  return async function () {
    //------Ending Routine 'practice_test'-------
    for (const thisComponent of practice_testComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    practice_movie.stop();
    // the Routine "practice_test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var noise_picComponents;
function noise_picRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'noise_pic'-------
    t = 0;
    noise_picClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.400000);
    // update component parameters for each repeat
    // keep track of which components have finished
    noise_picComponents = [];
    noise_picComponents.push(image);
    
    for (const thisComponent of noise_picComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function noise_picRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'noise_pic'-------
    // get current time
    t = noise_picClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image* updates
    if (t >= 0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }

    frameRemains = 0 + 0.4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of noise_picComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function noise_picRoutineEnd() {
  return async function () {
    //------Ending Routine 'noise_pic'-------
    for (const thisComponent of noise_picComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var practice_questionComponents;
function practice_questionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'practice_question'-------
    t = 0;
    practice_questionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.200000);
    // update component parameters for each repeat
    // keep track of which components have finished
    practice_questionComponents = [];
    practice_questionComponents.push(text_3);
    
    for (const thisComponent of practice_questionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function practice_questionRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'practice_question'-------
    // get current time
    t = practice_questionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.2 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }

    frameRemains = 0.2 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_3.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practice_questionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practice_questionRoutineEnd() {
  return async function () {
    //------Ending Routine 'practice_question'-------
    for (const thisComponent of practice_questionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var practice_movie2Clock;
var practice_movie2;
var _key_resp_2_allKeys;
var practice_mainComponents;
function practice_mainRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'practice_main'-------
    t = 0;
    practice_mainClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    practice_movie2Clock = new util.Clock();
    practice_movie2 = new visual.MovieStim({
      win: psychoJS.window,
      name: 'practice_movie2',
      units: undefined,
      movie: movieFile,
      pos: [0, 0],
      size: undefined,
      ori: 0.0,
      opacity: undefined,
      loop: false,
      noAudio: true,
      });
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    practice_mainComponents = [];
    practice_mainComponents.push(practice_movie2);
    practice_mainComponents.push(text_4);
    practice_mainComponents.push(key_resp_2);
    
    for (const thisComponent of practice_mainComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function practice_mainRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'practice_main'-------
    // get current time
    t = practice_mainClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *practice_movie2* updates
    if (t >= 0.2 && practice_movie2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_movie2.tStart = t;  // (not accounting for frame time here)
      practice_movie2.frameNStart = frameN;  // exact frame index
      
      practice_movie2.setAutoDraw(true);
      practice_movie2.play();
    }

    
    // *text_4* updates
    if (t >= 0.2 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }

    
    // *key_resp_2* updates
    if (t >= 0.2 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_2.keys == corrResp) {
            key_resp_2.corr = 1;
        } else {
            key_resp_2.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practice_mainComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practice_mainRoutineEnd() {
  return async function () {
    //------Ending Routine 'practice_main'-------
    for (const thisComponent of practice_mainComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    practice_movie2.stop();
    // was no response the correct answer?!
    if (key_resp_2.keys === undefined) {
      if (['None','none',undefined].includes(corrResp)) {
         key_resp_2.corr = 1;  // correct non-response
      } else {
         key_resp_2.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    psychoJS.experiment.addData('key_resp_2.corr', key_resp_2.corr);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "practice_main" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_4_allKeys;
var main_block_endComponents;
function main_block_endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'main_block_end'-------
    t = 0;
    main_block_endClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    // keep track of which components have finished
    main_block_endComponents = [];
    main_block_endComponents.push(text_7);
    main_block_endComponents.push(text_8);
    main_block_endComponents.push(key_resp_4);
    
    for (const thisComponent of main_block_endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function main_block_endRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'main_block_end'-------
    // get current time
    t = main_block_endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_7* updates
    if (t >= 0.2 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
    }

    
    // *text_8* updates
    if (t >= 0.2 && text_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_8.tStart = t;  // (not accounting for frame time here)
      text_8.frameNStart = frameN;  // exact frame index
      
      text_8.setAutoDraw(true);
    }

    
    // *key_resp_4* updates
    if (t >= 0.2 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }

    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of main_block_endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function main_block_endRoutineEnd() {
  return async function () {
    //------Ending Routine 'main_block_end'-------
    for (const thisComponent of main_block_endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
    // the Routine "main_block_end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var cross_2Components;
function cross_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'cross_2'-------
    t = 0;
    cross_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.400000);
    // update component parameters for each repeat
    // keep track of which components have finished
    cross_2Components = [];
    cross_2Components.push(polygon_2);
    
    for (const thisComponent of cross_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function cross_2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'cross_2'-------
    // get current time
    t = cross_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_2* updates
    if (t >= 0.2 && polygon_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_2.tStart = t;  // (not accounting for frame time here)
      polygon_2.frameNStart = frameN;  // exact frame index
      
      polygon_2.setAutoDraw(true);
    }

    frameRemains = 0.2 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon_2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of cross_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function cross_2RoutineEnd() {
  return async function () {
    //------Ending Routine 'cross_2'-------
    for (const thisComponent of cross_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var movieselClock;
var moviesel;
var testComponents;
function testRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'test'-------
    t = 0;
    testClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    movieselClock = new util.Clock();
    moviesel = new visual.MovieStim({
      win: psychoJS.window,
      name: 'moviesel',
      units: undefined,
      movie: movieFile,
      pos: [0, 0],
      size: undefined,
      ori: 0.0,
      opacity: undefined,
      loop: false,
      noAudio: true,
      });
    // keep track of which components have finished
    testComponents = [];
    testComponents.push(moviesel);
    
    for (const thisComponent of testComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function testRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'test'-------
    // get current time
    t = testClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *moviesel* updates
    if (t >= 0.0 && moviesel.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      moviesel.tStart = t;  // (not accounting for frame time here)
      moviesel.frameNStart = frameN;  // exact frame index
      
      moviesel.setAutoDraw(true);
      moviesel.play();
    }

    if (moviesel.status === PsychoJS.Status.FINISHED) {  // force-end the routine
        continueRoutine = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of testComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function testRoutineEnd() {
  return async function () {
    //------Ending Routine 'test'-------
    for (const thisComponent of testComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    moviesel.stop();
    // the Routine "test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var noise_pic_2Components;
function noise_pic_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'noise_pic_2'-------
    t = 0;
    noise_pic_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.400000);
    // update component parameters for each repeat
    // keep track of which components have finished
    noise_pic_2Components = [];
    noise_pic_2Components.push(image_2);
    
    for (const thisComponent of noise_pic_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function noise_pic_2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'noise_pic_2'-------
    // get current time
    t = noise_pic_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_2* updates
    if (t >= 0 && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
    }

    frameRemains = 0 + 0.4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of noise_pic_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function noise_pic_2RoutineEnd() {
  return async function () {
    //------Ending Routine 'noise_pic_2'-------
    for (const thisComponent of noise_pic_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var questionComponents;
function questionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'question'-------
    t = 0;
    questionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.200000);
    // update component parameters for each repeat
    // keep track of which components have finished
    questionComponents = [];
    questionComponents.push(text);
    
    for (const thisComponent of questionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function questionRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'question'-------
    // get current time
    t = questionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.2 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    frameRemains = 0.2 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of questionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function questionRoutineEnd() {
  return async function () {
    //------Ending Routine 'question'-------
    for (const thisComponent of questionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var movieClock;
var movie;
var _key_resp_allKeys;
var saymasayisi;
var saymasayisi2;
var mainComponents;
function mainRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'main'-------
    t = 0;
    mainClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    movieClock = new util.Clock();
    movie = new visual.MovieStim({
      win: psychoJS.window,
      name: 'movie',
      units: undefined,
      movie: movieFile,
      pos: [0, 0],
      size: undefined,
      ori: 0.0,
      opacity: undefined,
      loop: false,
      noAudio: true,
      });
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    saymasayisi = (saymasayisi + 1);
    saymasayisi2 = (saymasayisi2 + 1);
    main_trials.addData("TrialOrder", saymasayisi2);
    if ((saymasayisi !== 11)) {
        main_trials.addData("ClipOrderinMovie", saymasayisi);
    } else {
        saymasayisi = 1;
        main_trials.addData("ClipOrderinMovie", saymasayisi);
    }
    
    // keep track of which components have finished
    mainComponents = [];
    mainComponents.push(movie);
    mainComponents.push(text_2);
    mainComponents.push(key_resp);
    
    for (const thisComponent of mainComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function mainRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'main'-------
    // get current time
    t = mainClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *movie* updates
    if (t >= 0.2 && movie.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      movie.tStart = t;  // (not accounting for frame time here)
      movie.frameNStart = frameN;  // exact frame index
      
      movie.setAutoDraw(true);
      movie.play();
    }

    
    // *text_2* updates
    if (t >= 0.2 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.2 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp.keys == corrResp) {
            key_resp.corr = 1;
        } else {
            key_resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of mainComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function mainRoutineEnd() {
  return async function () {
    //------Ending Routine 'main'-------
    for (const thisComponent of mainComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    movie.stop();
    // was no response the correct answer?!
    if (key_resp.keys === undefined) {
      if (['None','none',undefined].includes(corrResp)) {
         key_resp.corr = 1;  // correct non-response
      } else {
         key_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    psychoJS.experiment.addData('key_resp.corr', key_resp.corr);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "main" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var byeComponents;
function byeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'bye'-------
    t = 0;
    byeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.700000);
    // update component parameters for each repeat
    // keep track of which components have finished
    byeComponents = [];
    byeComponents.push(text_9);
    
    for (const thisComponent of byeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function byeRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'bye'-------
    // get current time
    t = byeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_9* updates
    if (t >= 0.2 && text_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_9.tStart = t;  // (not accounting for frame time here)
      text_9.frameNStart = frameN;  // exact frame index
      
      text_9.setAutoDraw(true);
    }

    frameRemains = 0.2 + 3.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_9.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_9.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of byeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function byeRoutineEnd() {
  return async function () {
    //------Ending Routine 'bye'-------
    for (const thisComponent of byeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
