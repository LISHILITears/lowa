/*************************** 
 * Iowa_Gambling_Task *
 ***************************/


// store info about the experiment session:
let expName = 'iowa_gambling_task';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instructionsRoutineBegin());
flowScheduler.add(instructionsRoutineEachFrame());
flowScheduler.add(instructionsRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);



flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'cond_file.xlsx', 'path': 'cond_file.xlsx'},
    {'name': 'assets/gold.png', 'path': 'assets/gold.png'},
    {'name': 'assets/pink.png', 'path': 'assets/pink.png'},
    {'name': 'assets/teal.png', 'path': 'assets/teal.png'},
    {'name': 'assets/purple.png', 'path': 'assets/purple.png'},
    {'name': 'assets/gold_win.png', 'path': 'assets/gold_win.png'},
    {'name': 'assets/pink_win.png', 'path': 'assets/pink_win.png'},
    {'name': 'assets/teal_win.png', 'path': 'assets/teal_win.png'},
    {'name': 'assets/purple_win.png', 'path': 'assets/purple_win.png'},
    {'name': 'assets/gold_lose.png', 'path': 'assets/gold_lose.png'},
    {'name': 'assets/pink_lose.png', 'path': 'assets/pink_lose.png'},
    {'name': 'assets/teal_lose.png', 'path': 'assets/teal_lose.png'},
    {'name': 'assets/purple_lose.png', 'path': 'assets/purple_lose.png'},
    {'name': 'cond_file.xlsx', 'path': 'cond_file.xlsx'},
    {'name': 'assets/gold.png', 'path': 'assets/gold.png'},
    {'name': 'assets/gold_lose.png', 'path': 'assets/gold_lose.png'},
    {'name': 'assets/gold_win.png', 'path': 'assets/gold_win.png'},
    {'name': 'assets/pink.png', 'path': 'assets/pink.png'},
    {'name': 'assets/pink_lose.png', 'path': 'assets/pink_lose.png'},
    {'name': 'assets/pink_win.png', 'path': 'assets/pink_win.png'},
    {'name': 'assets/purple.png', 'path': 'assets/purple.png'},
    {'name': 'assets/purple_lose.png', 'path': 'assets/purple_lose.png'},
    {'name': 'assets/purple_win.png', 'path': 'assets/purple_win.png'},
    {'name': 'assets/teal.png', 'path': 'assets/teal.png'},
    {'name': 'assets/teal_lose.png', 'path': 'assets/teal_lose.png'},
    {'name': 'assets/teal_win.png', 'path': 'assets/teal_win.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.WARNING);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2025.1.0';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var instructionsClock;
var instruct;
var mouse_instruct1;
var trialClock;
var textbox;
var gold_down1;
var pink_down1;
var teal_down1;
var purple_down1;
var mouse1;
var purple_clicks;
var gold_clicks;
var pink_clicks;
var teal_clicks;
var feedbackClock;
var gold_win_y_pos;
var pink_win_y_pos;
var teal_win_y_pos;
var purple_win_y_pos;
var gold_lose_y_pos;
var pink_lose_y_pos;
var teal_lose_y_pos;
var purple_lose_y_pos;
var current_balance;
var textbox_2;
var gold_down_2;
var pink_down_2;
var teal_down_2;
var purple_down_2;
var gold_w;
var pink_w;
var teal_w;
var purple_w;
var gold_l;
var pink_l;
var teal_l;
var purple_l;
var endClock;
var text_end;
var mouse_end;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  instruct = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruct',
    text: 'Welcome to the Iowa Gambling Task!\n\nIn this task, you can click on any of the 4 cards on screen. Some of the cards will win you £1000 and some cards will win you £50. Occasionally, you will either need to forfeit your winnings or be penalised some money.\nYou will be given £2000 to start.\nClick anywhere to begin!',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  mouse_instruct1 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_instruct1.mouseClock = new util.Clock();
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  textbox = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox',
    text: '',
    placeholder: 'Type here...',
    font: 'Open Sans',
    pos: [0, 0.25], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1, 0.15],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: [(- 0.1216), 0.3569, (- 0.4431)],
    languageStyle: 'LTR',
    bold: false, italic: true,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  gold_down1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'gold_down1', units : undefined, 
    image : 'assets/gold.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.4), (- 0.15)], 
    draggable: false,
    size : [0.22, 0.31],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  pink_down1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'pink_down1', units : undefined, 
    image : 'assets/pink.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.13), (- 0.15)], 
    draggable: false,
    size : [0.22, 0.31],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  teal_down1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'teal_down1', units : undefined, 
    image : 'assets/teal.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.13, (- 0.15)], 
    draggable: false,
    size : [0.22, 0.31],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  purple_down1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'purple_down1', units : undefined, 
    image : 'assets/purple.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.4, (- 0.15)], 
    draggable: false,
    size : [0.22, 0.31],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  mouse1 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse1.mouseClock = new util.Clock();
  // Run 'Begin Experiment' code from checkClick
  purple_clicks = [];
  gold_clicks = [];
  pink_clicks = [];
  teal_clicks = [];
  
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  // Run 'Begin Experiment' code from fb_code
  gold_win_y_pos = 100;
  pink_win_y_pos = 100;
  teal_win_y_pos = 100;
  purple_win_y_pos = 100;
  gold_lose_y_pos = 100;
  pink_lose_y_pos = 100;
  teal_lose_y_pos = 100;
  purple_lose_y_pos = 100;
  current_balance = 2000;
  
  textbox_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_2',
    text: '',
    placeholder: 'Type here...',
    font: 'Open Sans',
    pos: [0, 0.25], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1, 0.15],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: [(- 0.1216), 0.3569, (- 0.4431)],
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  gold_down_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'gold_down_2', units : undefined, 
    image : 'assets/gold.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.4), (- 0.15)], 
    draggable: false,
    size : [0.22, 0.31],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  pink_down_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'pink_down_2', units : undefined, 
    image : 'assets/pink.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.13), (- 0.15)], 
    draggable: false,
    size : [0.22, 0.31],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  teal_down_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'teal_down_2', units : undefined, 
    image : 'assets/teal.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.13, (- 0.15)], 
    draggable: false,
    size : [0.22, 0.31],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  purple_down_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'purple_down_2', units : undefined, 
    image : 'assets/purple.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.4, (- 0.15)], 
    draggable: false,
    size : [0.22, 0.31],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  gold_w = new visual.ImageStim({
    win : psychoJS.window,
    name : 'gold_w', units : undefined, 
    image : 'assets/gold_win.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.22, 0.31],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  pink_w = new visual.ImageStim({
    win : psychoJS.window,
    name : 'pink_w', units : undefined, 
    image : 'assets/pink_win.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.22, 0.31],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  teal_w = new visual.ImageStim({
    win : psychoJS.window,
    name : 'teal_w', units : undefined, 
    image : 'assets/teal_win.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.22, 0.31],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -8.0 
  });
  purple_w = new visual.ImageStim({
    win : psychoJS.window,
    name : 'purple_w', units : undefined, 
    image : 'assets/purple_win.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.22, 0.31],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -9.0 
  });
  gold_l = new visual.ImageStim({
    win : psychoJS.window,
    name : 'gold_l', units : undefined, 
    image : 'assets/gold_lose.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.22, 0.31],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -10.0 
  });
  pink_l = new visual.ImageStim({
    win : psychoJS.window,
    name : 'pink_l', units : undefined, 
    image : 'assets/pink_lose.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.22, 0.31],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -11.0 
  });
  teal_l = new visual.ImageStim({
    win : psychoJS.window,
    name : 'teal_l', units : undefined, 
    image : 'assets/teal_lose.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.22, 0.31],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -12.0 
  });
  purple_l = new visual.ImageStim({
    win : psychoJS.window,
    name : 'purple_l', units : undefined, 
    image : 'assets/purple_lose.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.22, 0.31],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -13.0 
  });
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  text_end = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_end',
    text: 'You have reached the end of the task. Click anywhere to finish\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  mouse_end = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_end.mouseClock = new util.Clock();
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var instructionsMaxDurationReached;
var gotValidClick;
var instructionsMaxDuration;
var instructionsComponents;
function instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instructionsClock.reset();
    routineTimer.reset();
    instructionsMaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_instruct1
    // current position of the mouse:
    mouse_instruct1.x = [];
    mouse_instruct1.y = [];
    mouse_instruct1.leftButton = [];
    mouse_instruct1.midButton = [];
    mouse_instruct1.rightButton = [];
    mouse_instruct1.time = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('instructions.started', globalClock.getTime());
    instructionsMaxDuration = null
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(instruct);
    instructionsComponents.push(mouse_instruct1);
    
    instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions' ---
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruct* updates
    if (t >= 0.0 && instruct.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruct.tStart = t;  // (not accounting for frame time here)
      instruct.frameNStart = frameN;  // exact frame index
      
      instruct.setAutoDraw(true);
    }
    
    
    // if instruct is active this frame...
    if (instruct.status === PsychoJS.Status.STARTED) {
    }
    
    // *mouse_instruct1* updates
    if (t >= 0.0 && mouse_instruct1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_instruct1.tStart = t;  // (not accounting for frame time here)
      mouse_instruct1.frameNStart = frameN;  // exact frame index
      
      mouse_instruct1.status = PsychoJS.Status.STARTED;
      mouse_instruct1.mouseClock.reset();
      prevButtonState = mouse_instruct1.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if mouse_instruct1 is active this frame...
    if (mouse_instruct1.status === PsychoJS.Status.STARTED) {
      _mouseButtons = mouse_instruct1.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_instruct1.getPos();
          mouse_instruct1.x.push(_mouseXYs[0]);
          mouse_instruct1.y.push(_mouseXYs[1]);
          mouse_instruct1.leftButton.push(_mouseButtons[0]);
          mouse_instruct1.midButton.push(_mouseButtons[1]);
          mouse_instruct1.rightButton.push(_mouseButtons[2]);
          mouse_instruct1.time.push(mouse_instruct1.mouseClock.getTime());
          // end routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions' ---
    instructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instructions.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_instruct1.x', mouse_instruct1.x);
    psychoJS.experiment.addData('mouse_instruct1.y', mouse_instruct1.y);
    psychoJS.experiment.addData('mouse_instruct1.leftButton', mouse_instruct1.leftButton);
    psychoJS.experiment.addData('mouse_instruct1.midButton', mouse_instruct1.midButton);
    psychoJS.experiment.addData('mouse_instruct1.rightButton', mouse_instruct1.rightButton);
    psychoJS.experiment.addData('mouse_instruct1.time', mouse_instruct1.time);
    
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 5, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'cond_file.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd(snapshot));
      trialsLoopScheduler.add(feedbackRoutineBegin(snapshot));
      trialsLoopScheduler.add(feedbackRoutineEachFrame());
      trialsLoopScheduler.add(feedbackRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
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
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trialMaxDurationReached;
var trialMaxDuration;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    trialClock.reset();
    routineTimer.reset();
    trialMaxDurationReached = false;
    // update component parameters for each repeat
    textbox.setText(("Your current balance is \u00a3" + current_balance.toString()));
    // setup some python lists for storing info about the mouse1
    // current position of the mouse:
    mouse1.x = [];
    mouse1.y = [];
    mouse1.leftButton = [];
    mouse1.midButton = [];
    mouse1.rightButton = [];
    mouse1.time = [];
    mouse1.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    trialMaxDuration = null
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(textbox);
    trialComponents.push(gold_down1);
    trialComponents.push(pink_down1);
    trialComponents.push(teal_down1);
    trialComponents.push(purple_down1);
    trialComponents.push(mouse1);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textbox* updates
    if (t >= 0.0 && textbox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox.tStart = t;  // (not accounting for frame time here)
      textbox.frameNStart = frameN;  // exact frame index
      
      textbox.setAutoDraw(true);
    }
    
    
    // if textbox is active this frame...
    if (textbox.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *gold_down1* updates
    if (t >= 0.0 && gold_down1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gold_down1.tStart = t;  // (not accounting for frame time here)
      gold_down1.frameNStart = frameN;  // exact frame index
      
      gold_down1.setAutoDraw(true);
    }
    
    
    // if gold_down1 is active this frame...
    if (gold_down1.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *pink_down1* updates
    if (t >= 0.0 && pink_down1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pink_down1.tStart = t;  // (not accounting for frame time here)
      pink_down1.frameNStart = frameN;  // exact frame index
      
      pink_down1.setAutoDraw(true);
    }
    
    
    // if pink_down1 is active this frame...
    if (pink_down1.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *teal_down1* updates
    if (t >= 0.0 && teal_down1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      teal_down1.tStart = t;  // (not accounting for frame time here)
      teal_down1.frameNStart = frameN;  // exact frame index
      
      teal_down1.setAutoDraw(true);
    }
    
    
    // if teal_down1 is active this frame...
    if (teal_down1.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *purple_down1* updates
    if (t >= 0.0 && purple_down1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      purple_down1.tStart = t;  // (not accounting for frame time here)
      purple_down1.frameNStart = frameN;  // exact frame index
      
      purple_down1.setAutoDraw(true);
    }
    
    
    // if purple_down1 is active this frame...
    if (purple_down1.status === PsychoJS.Status.STARTED) {
    }
    
    // *mouse1* updates
    if (t >= 0.0 && mouse1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse1.tStart = t;  // (not accounting for frame time here)
      mouse1.frameNStart = frameN;  // exact frame index
      
      mouse1.status = PsychoJS.Status.STARTED;
      mouse1.mouseClock.reset();
      prevButtonState = mouse1.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if mouse1 is active this frame...
    if (mouse1.status === PsychoJS.Status.STARTED) {
      _mouseButtons = mouse1.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse1.clickableObjects = eval([gold_down1, pink_down1, teal_down1, purple_down1])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse1.clickableObjects)) {
              mouse1.clickableObjects = [mouse1.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse1.clickableObjects) {
              if (obj.contains(mouse1)) {
                  gotValidClick = true;
                  mouse1.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse1.clicked_name.push(null);
          }
          _mouseXYs = mouse1.getPos();
          mouse1.x.push(_mouseXYs[0]);
          mouse1.y.push(_mouseXYs[1]);
          mouse1.leftButton.push(_mouseButtons[0]);
          mouse1.midButton.push(_mouseButtons[1]);
          mouse1.rightButton.push(_mouseButtons[2]);
          mouse1.time.push(mouse1.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse1.x', mouse1.x);
    psychoJS.experiment.addData('mouse1.y', mouse1.y);
    psychoJS.experiment.addData('mouse1.leftButton', mouse1.leftButton);
    psychoJS.experiment.addData('mouse1.midButton', mouse1.midButton);
    psychoJS.experiment.addData('mouse1.rightButton', mouse1.rightButton);
    psychoJS.experiment.addData('mouse1.time', mouse1.time);
    psychoJS.experiment.addData('mouse1.clicked_name', mouse1.clicked_name);
    
    // Run 'End Routine' code from checkClick
    if ((mouse1.clicked_name[0] === "gold_down1")) {
        gold_clicks.push(1);
    } else {
        if ((mouse1.clicked_name[0] === "pink_down1")) {
            pink_clicks.push(1);
        } else {
            if ((mouse1.clicked_name[0] === "teal_down1")) {
                teal_clicks.push(1);
            } else {
                if ((mouse1.clicked_name[0] === "purple_down1")) {
                    purple_clicks.push(1);
                }
            }
        }
    }
    
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedbackMaxDurationReached;
var feedbackMaxDuration;
var feedbackComponents;
function feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    feedbackClock.reset(routineTimer.getTime());
    routineTimer.add(2.000000);
    feedbackMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from fb_code
    if ((penalty_trial === 0)) {
        if ((mouse1.clicked_name[0] === "gold_down1")) {
            gold_win_y_pos = (- 0.15);
            current_balance += 50;
        } else {
            if ((mouse1.clicked_name[0] === "pink_down1")) {
                pink_win_y_pos = (- 0.15);
                current_balance += 1000;
            } else {
                if ((mouse1.clicked_name[0] === "teal_down1")) {
                    teal_win_y_pos = (- 0.15);
                    current_balance += 50;
                } else {
                    if ((mouse1.clicked_name[0] === "purple_down1")) {
                        purple_win_y_pos = (- 0.15);
                        current_balance += 1000;
                    }
                }
            }
        }
    } else {
        if ((mouse1.clicked_name[0] === "gold_down1")) {
            gold_lose_y_pos = (- 0.15);
        } else {
            if ((mouse1.clicked_name[0] === "pink_down1")) {
                pink_lose_y_pos = (- 0.15);
                current_balance -= 250;
            } else {
                if ((mouse1.clicked_name[0] === "teal_down1")) {
                    teal_lose_y_pos = (- 0.15);
                } else {
                    if ((mouse1.clicked_name[0] === "purple_down1")) {
                        purple_lose_y_pos = (- 0.15);
                        current_balance -= 250;
                    }
                }
            }
        }
    }
    
    textbox_2.setText(("Your current balance is \u00a3" + current_balance.toString()));
    gold_w.setPos([(- 0.4), gold_win_y_pos]);
    pink_w.setPos([(- 0.13), pink_win_y_pos]);
    teal_w.setPos([0.13, teal_win_y_pos]);
    purple_w.setPos([0.4, purple_win_y_pos]);
    gold_l.setPos([(- 0.4), gold_lose_y_pos]);
    pink_l.setPos([(- 0.13), pink_lose_y_pos]);
    teal_l.setPos([0.13, teal_lose_y_pos]);
    purple_l.setPos([0.4, purple_lose_y_pos]);
    psychoJS.experiment.addData('feedback.started', globalClock.getTime());
    feedbackMaxDuration = null
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(textbox_2);
    feedbackComponents.push(gold_down_2);
    feedbackComponents.push(pink_down_2);
    feedbackComponents.push(teal_down_2);
    feedbackComponents.push(purple_down_2);
    feedbackComponents.push(gold_w);
    feedbackComponents.push(pink_w);
    feedbackComponents.push(teal_w);
    feedbackComponents.push(purple_w);
    feedbackComponents.push(gold_l);
    feedbackComponents.push(pink_l);
    feedbackComponents.push(teal_l);
    feedbackComponents.push(purple_l);
    
    feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback' ---
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textbox_2* updates
    if (t >= 0.0 && textbox_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_2.tStart = t;  // (not accounting for frame time here)
      textbox_2.frameNStart = frameN;  // exact frame index
      
      textbox_2.setAutoDraw(true);
    }
    
    
    // if textbox_2 is active this frame...
    if (textbox_2.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (textbox_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      textbox_2.tStop = t;  // not accounting for scr refresh
      textbox_2.frameNStop = frameN;  // exact frame index
      // update status
      textbox_2.status = PsychoJS.Status.FINISHED;
      textbox_2.setAutoDraw(false);
    }
    
    
    // *gold_down_2* updates
    if (t >= 0.0 && gold_down_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gold_down_2.tStart = t;  // (not accounting for frame time here)
      gold_down_2.frameNStart = frameN;  // exact frame index
      
      gold_down_2.setAutoDraw(true);
    }
    
    
    // if gold_down_2 is active this frame...
    if (gold_down_2.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (gold_down_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      gold_down_2.tStop = t;  // not accounting for scr refresh
      gold_down_2.frameNStop = frameN;  // exact frame index
      // update status
      gold_down_2.status = PsychoJS.Status.FINISHED;
      gold_down_2.setAutoDraw(false);
    }
    
    
    // *pink_down_2* updates
    if (t >= 0.0 && pink_down_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pink_down_2.tStart = t;  // (not accounting for frame time here)
      pink_down_2.frameNStart = frameN;  // exact frame index
      
      pink_down_2.setAutoDraw(true);
    }
    
    
    // if pink_down_2 is active this frame...
    if (pink_down_2.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (pink_down_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      pink_down_2.tStop = t;  // not accounting for scr refresh
      pink_down_2.frameNStop = frameN;  // exact frame index
      // update status
      pink_down_2.status = PsychoJS.Status.FINISHED;
      pink_down_2.setAutoDraw(false);
    }
    
    
    // *teal_down_2* updates
    if (t >= 0.0 && teal_down_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      teal_down_2.tStart = t;  // (not accounting for frame time here)
      teal_down_2.frameNStart = frameN;  // exact frame index
      
      teal_down_2.setAutoDraw(true);
    }
    
    
    // if teal_down_2 is active this frame...
    if (teal_down_2.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (teal_down_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      teal_down_2.tStop = t;  // not accounting for scr refresh
      teal_down_2.frameNStop = frameN;  // exact frame index
      // update status
      teal_down_2.status = PsychoJS.Status.FINISHED;
      teal_down_2.setAutoDraw(false);
    }
    
    
    // *purple_down_2* updates
    if (t >= 0.0 && purple_down_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      purple_down_2.tStart = t;  // (not accounting for frame time here)
      purple_down_2.frameNStart = frameN;  // exact frame index
      
      purple_down_2.setAutoDraw(true);
    }
    
    
    // if purple_down_2 is active this frame...
    if (purple_down_2.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (purple_down_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      purple_down_2.tStop = t;  // not accounting for scr refresh
      purple_down_2.frameNStop = frameN;  // exact frame index
      // update status
      purple_down_2.status = PsychoJS.Status.FINISHED;
      purple_down_2.setAutoDraw(false);
    }
    
    
    // *gold_w* updates
    if (t >= 0.0 && gold_w.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gold_w.tStart = t;  // (not accounting for frame time here)
      gold_w.frameNStart = frameN;  // exact frame index
      
      gold_w.setAutoDraw(true);
    }
    
    
    // if gold_w is active this frame...
    if (gold_w.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (gold_w.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      gold_w.tStop = t;  // not accounting for scr refresh
      gold_w.frameNStop = frameN;  // exact frame index
      // update status
      gold_w.status = PsychoJS.Status.FINISHED;
      gold_w.setAutoDraw(false);
    }
    
    
    // *pink_w* updates
    if (t >= 0.0 && pink_w.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pink_w.tStart = t;  // (not accounting for frame time here)
      pink_w.frameNStart = frameN;  // exact frame index
      
      pink_w.setAutoDraw(true);
    }
    
    
    // if pink_w is active this frame...
    if (pink_w.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (pink_w.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      pink_w.tStop = t;  // not accounting for scr refresh
      pink_w.frameNStop = frameN;  // exact frame index
      // update status
      pink_w.status = PsychoJS.Status.FINISHED;
      pink_w.setAutoDraw(false);
    }
    
    
    // *teal_w* updates
    if (t >= 0.0 && teal_w.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      teal_w.tStart = t;  // (not accounting for frame time here)
      teal_w.frameNStart = frameN;  // exact frame index
      
      teal_w.setAutoDraw(true);
    }
    
    
    // if teal_w is active this frame...
    if (teal_w.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (teal_w.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      teal_w.tStop = t;  // not accounting for scr refresh
      teal_w.frameNStop = frameN;  // exact frame index
      // update status
      teal_w.status = PsychoJS.Status.FINISHED;
      teal_w.setAutoDraw(false);
    }
    
    
    // *purple_w* updates
    if (t >= 0.0 && purple_w.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      purple_w.tStart = t;  // (not accounting for frame time here)
      purple_w.frameNStart = frameN;  // exact frame index
      
      purple_w.setAutoDraw(true);
    }
    
    
    // if purple_w is active this frame...
    if (purple_w.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (purple_w.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      purple_w.tStop = t;  // not accounting for scr refresh
      purple_w.frameNStop = frameN;  // exact frame index
      // update status
      purple_w.status = PsychoJS.Status.FINISHED;
      purple_w.setAutoDraw(false);
    }
    
    
    // *gold_l* updates
    if (t >= 0.0 && gold_l.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gold_l.tStart = t;  // (not accounting for frame time here)
      gold_l.frameNStart = frameN;  // exact frame index
      
      gold_l.setAutoDraw(true);
    }
    
    
    // if gold_l is active this frame...
    if (gold_l.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (gold_l.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      gold_l.tStop = t;  // not accounting for scr refresh
      gold_l.frameNStop = frameN;  // exact frame index
      // update status
      gold_l.status = PsychoJS.Status.FINISHED;
      gold_l.setAutoDraw(false);
    }
    
    
    // *pink_l* updates
    if (t >= 0.0 && pink_l.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pink_l.tStart = t;  // (not accounting for frame time here)
      pink_l.frameNStart = frameN;  // exact frame index
      
      pink_l.setAutoDraw(true);
    }
    
    
    // if pink_l is active this frame...
    if (pink_l.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (pink_l.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      pink_l.tStop = t;  // not accounting for scr refresh
      pink_l.frameNStop = frameN;  // exact frame index
      // update status
      pink_l.status = PsychoJS.Status.FINISHED;
      pink_l.setAutoDraw(false);
    }
    
    
    // *teal_l* updates
    if (t >= 0.0 && teal_l.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      teal_l.tStart = t;  // (not accounting for frame time here)
      teal_l.frameNStart = frameN;  // exact frame index
      
      teal_l.setAutoDraw(true);
    }
    
    
    // if teal_l is active this frame...
    if (teal_l.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (teal_l.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      teal_l.tStop = t;  // not accounting for scr refresh
      teal_l.frameNStop = frameN;  // exact frame index
      // update status
      teal_l.status = PsychoJS.Status.FINISHED;
      teal_l.setAutoDraw(false);
    }
    
    
    // *purple_l* updates
    if (t >= 0.0 && purple_l.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      purple_l.tStart = t;  // (not accounting for frame time here)
      purple_l.frameNStart = frameN;  // exact frame index
      
      purple_l.setAutoDraw(true);
    }
    
    
    // if purple_l is active this frame...
    if (purple_l.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (purple_l.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      purple_l.tStop = t;  // not accounting for scr refresh
      purple_l.frameNStop = frameN;  // exact frame index
      // update status
      purple_l.status = PsychoJS.Status.FINISHED;
      purple_l.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback' ---
    feedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('feedback.stopped', globalClock.getTime());
    // Run 'End Routine' code from fb_code
    gold_win_y_pos = 100;
    pink_win_y_pos = 100;
    teal_win_y_pos = 100;
    purple_win_y_pos = 100;
    gold_lose_y_pos = 100;
    pink_lose_y_pos = 100;
    teal_lose_y_pos = 100;
    purple_lose_y_pos = 100;
    
    if (routineForceEnded) {
        routineTimer.reset();} else if (feedbackMaxDurationReached) {
        feedbackClock.add(feedbackMaxDuration);
    } else {
        feedbackClock.add(2.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var endMaxDurationReached;
var endMaxDuration;
var endComponents;
function endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    endClock.reset();
    routineTimer.reset();
    endMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from saveClicks
    psychoJS.experiment.addData("n_gold_clicks", util.sum(gold_clicks));
    psychoJS.experiment.addData("n_pink_clicks", util.sum(pink_clicks));
    psychoJS.experiment.addData("n_teal_clicks", util.sum(teal_clicks));
    psychoJS.experiment.addData("n_purple_clicks", util.sum(purple_clicks));
    
    // setup some python lists for storing info about the mouse_end
    // current position of the mouse:
    mouse_end.x = [];
    mouse_end.y = [];
    mouse_end.leftButton = [];
    mouse_end.midButton = [];
    mouse_end.rightButton = [];
    mouse_end.time = [];
    gotValidClick = false; // until a click is received
    // ------------------------------------------------------
    // Disable downloading results to browser
    // ------------------------------------------------------
    psychoJS._saveResults = 0;
    
    
    // ------------------------------------------------------
    // Generate filename for results
    // ------------------------------------------------------
    let filename = psychoJS._experiment.experimentName + '_' + psychoJS._experiment._datetime + '.csv';
    
    
    // ------------------------------------------------------
    // Extract data object from experiment
    // ------------------------------------------------------
    let dataObj = psychoJS._experiment._trialsData;
    
    
    // ------------------------------------------------------
    // Convert data object to CSV
    // ------------------------------------------------------
    let data = [Object.keys(dataObj[0])].concat(dataObj).map(it => {
        return Object.values(it).toString()
    }).join('\n')
    
    
    // ------------------------------------------------------
    // Send data to OSF via DataPipe
    // ------------------------------------------------------
    console.log('Saving data...');
    fetch('https://pipe.jspsych.org/api/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
        },
        body: JSON.stringify({
            experimentID: "1qFjt6FXKaWe",  // 请在此处填写你自己的 DataPipe Experiment ID
            filename:filename,
            data: data,
        }),
    }).then(response => response.json()).then(data => {
        //log response and force experiment end
        console.log(data);
        quitPsychoJS();
    })
    
    psychoJS.experiment.addData('end.started', globalClock.getTime());
    endMaxDuration = null
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(text_end);
    endComponents.push(mouse_end);
    
    endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end' ---
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_end* updates
    if (t >= 0.0 && text_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_end.tStart = t;  // (not accounting for frame time here)
      text_end.frameNStart = frameN;  // exact frame index
      
      text_end.setAutoDraw(true);
    }
    
    
    // if text_end is active this frame...
    if (text_end.status === PsychoJS.Status.STARTED) {
    }
    
    // *mouse_end* updates
    if (t >= 0.0 && mouse_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_end.tStart = t;  // (not accounting for frame time here)
      mouse_end.frameNStart = frameN;  // exact frame index
      
      mouse_end.status = PsychoJS.Status.STARTED;
      mouse_end.mouseClock.reset();
      prevButtonState = mouse_end.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if mouse_end is active this frame...
    if (mouse_end.status === PsychoJS.Status.STARTED) {
      _mouseButtons = mouse_end.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_end.getPos();
          mouse_end.x.push(_mouseXYs[0]);
          mouse_end.y.push(_mouseXYs[1]);
          mouse_end.leftButton.push(_mouseButtons[0]);
          mouse_end.midButton.push(_mouseButtons[1]);
          mouse_end.rightButton.push(_mouseButtons[2]);
          mouse_end.time.push(mouse_end.mouseClock.getTime());
          // end routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end' ---
    endComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('end.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_end.x', mouse_end.x);
    psychoJS.experiment.addData('mouse_end.y', mouse_end.y);
    psychoJS.experiment.addData('mouse_end.leftButton', mouse_end.leftButton);
    psychoJS.experiment.addData('mouse_end.midButton', mouse_end.midButton);
    psychoJS.experiment.addData('mouse_end.rightButton', mouse_end.rightButton);
    psychoJS.experiment.addData('mouse_end.time', mouse_end.time);
    
    // the Routine "end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
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
