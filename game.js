const MAIN_ANSWERS = ["AIR", "WATER", "WASTE", "LAND / SITE"];
const ROUND_LENGTH = 10;

const cards = [
  {
    prompt: "A metal-finishing plant's stack releases chromium compounds. The file includes emissions-monitoring reports and an expired operating permit.",
    answer: "AIR",
    explanation: "The smokestack emissions make air pollution the main issue. The legal team should review Clean Air Act requirements, the facility's permit, monitoring reports, and any missed renewal or reporting deadlines."
  },
  {
    prompt: "Residents near a concrete batch plant report heavy dust settling on cars and porches. An inspection photo shows uncovered aggregate piles and trucks leaving the site.",
    answer: "AIR",
    explanation: "Dust and particulate emissions make this primarily an air issue. A paralegal could gather inspection records, complaints, permit conditions, and the facility's dust-control procedures for the legal team."
  },
  {
    prompt: "A warehouse installed a new industrial boiler six months ago. The compliance file has equipment invoices but no air-permit determination or emissions calculations.",
    answer: "AIR",
    explanation: "The new stationary source raises Clean Air Act permitting and compliance questions. The next step is to organize equipment specifications, emissions estimates, and communications with the permitting agency."
  },
  {
    prompt: "A paint manufacturer repeatedly records solvent odors at the property line. Its logs show that a control device was bypassed during several production runs.",
    answer: "AIR",
    explanation: "Air emissions from solvent use and the bypassed control device are central. Permit limits, operating procedures, deviation reports, and emissions records may be important in an agency enforcement review."
  },
  {
    prompt: "A fleet operator receives a notice about tampering with diesel emissions controls on several trucks. Maintenance records show the devices were intentionally disabled.",
    answer: "AIR",
    explanation: "Vehicle emissions controls place this in the air category. The Clean Air Act regulates mobile-source emissions, and the legal team will need complete maintenance, purchase, and modification records."
  },
  {
    prompt: "A demolition contractor begins removing old pipe insulation that laboratory results identify as asbestos-containing material. Nearby tenants say they saw visible dust outside the containment area.",
    answer: "AIR",
    explanation: "The possible release of asbestos fibers makes air the main issue, although worker-safety rules may also matter. The team should preserve sampling results, notices, work practices, and contractor records."
  },
  {
    prompt: "A refinery flare burns for hours after a process upset. The facility's permit requires prompt reporting of certain excess emissions, but the incident log was completed two weeks later.",
    answer: "AIR",
    explanation: "The flare event concerns air emissions and permit compliance. Timely incident reports, monitoring data, permit terms, and the reason for delayed documentation would be key parts of the file."
  },
  {
    prompt: "Families living beside a freight corridor report frequent diesel exhaust and worsening asthma. A proposed logistics center would add hundreds of daily truck trips to the same neighborhood.",
    answer: "AIR",
    explanation: "Diesel exhaust makes air pollution the main issue. The facts also raise environmental-justice concerns because the legal and permitting review should consider cumulative community burdens and meaningful public participation."
  },
  {
    prompt: "A food-processing facility sends wash water through a pipe directly into a creek. The file contains no discharge permit, sampling reports, or agency correspondence.",
    answer: "WATER",
    explanation: "A pipe carrying pollutants to a creek is a classic point-source water issue. The legal team should investigate Clean Water Act requirements and whether an NPDES permit was required or obtained."
  },
  {
    prompt: "After a rainstorm, oily water runs from an industrial yard into a storm drain that empties into a nearby stream. Several outdoor drums were left uncovered.",
    answer: "WATER",
    explanation: "The stormwater discharge to a stream makes water the main issue. The file review should include stormwater permit coverage, pollution-prevention plans, inspection logs, and outdoor storage practices."
  },
  {
    prompt: "A developer proposes filling part of a marsh to build an access road. A consultant's map labels the area as a potential wetland, but no delineation is in the file.",
    answer: "WATER",
    explanation: "Potential placement of fill in wetlands makes water the main issue. The team should investigate jurisdiction, wetland delineation, and any Clean Water Act Section 404 permitting involving the Army Corps and EPA."
  },
  {
    prompt: "A wastewater treatment plant reports several discharges above its permit limits. The monthly monitoring reports were signed, but laboratory bench sheets are missing.",
    answer: "WATER",
    explanation: "Permit-limit exceedances concern water pollution and NPDES compliance. The paralegal should help collect the permit, discharge-monitoring reports, laboratory support, and any notices sent to the agency."
  },
  {
    prompt: "Construction runoff carries muddy sediment through a roadside ditch into a tributary. The site's erosion controls shown on the approved plan were never installed.",
    answer: "WATER",
    explanation: "Sediment-laden construction stormwater makes this a water issue. Permit coverage, inspection reports, site plans, rainfall records, and corrective-action documents would help evaluate compliance."
  },
  {
    prompt: "A dairy's waste lagoon overflows through a channel into a river after days of heavy rain. The operator says all farm runoff is automatically exempt from federal permitting.",
    answer: "WATER",
    explanation: "The channel carrying waste to the river makes water the main issue. Agricultural stormwater can receive special treatment, but a discrete discharge from an animal operation requires a fact-specific Clean Water Act review."
  },
  {
    prompt: "An apartment complex repeatedly releases untreated sewage from a broken outfall into a lake. Tenant emails show the manager knew about the problem for months.",
    answer: "WATER",
    explanation: "The untreated discharge into a lake is primarily a water-pollution problem. The file should preserve notice, repair, sampling, and agency records relevant to permitting, enforcement, and possible civil claims."
  },
  {
    prompt: "A Pennsylvania manufacturer receives a PA DEP letter requesting records about its discharge to a local creek. The company also has an older EPA inspection report for the same outfall.",
    answer: "WATER",
    explanation: "The outfall and discharge records make water the main issue. Pennsylvania administers much of the NPDES program while EPA retains oversight, so both state and federal materials may matter."
  },
  {
    prompt: "A print shop keeps drums of spent solvent behind its building while waiting for pickup. Some drums are unlabeled, and the weekly inspection log has not been completed in two months.",
    answer: "WASTE",
    explanation: "The stored spent solvent raises hazardous-waste management issues under RCRA. Labels, accumulation dates, inspections, waste determinations, and the facility's compliance procedures should be gathered."
  },
  {
    prompt: "A shipment of hazardous waste arrives at a treatment facility, but the quantity does not match the electronic manifest. No one documented the discrepancy.",
    answer: "WASTE",
    explanation: "The manifest discrepancy makes hazardous-waste tracking the main issue. RCRA's cradle-to-grave system depends on accurate records connecting the generator, transporter, and receiving facility."
  },
  {
    prompt: "A laboratory pours unused chemical reagents into a dumpster with ordinary office trash. Staff members say they were never trained to identify hazardous waste.",
    answer: "WASTE",
    explanation: "Discarded chemicals make waste identification and management the central issue. The team should collect chemical inventories, waste determinations, training records, and the facility's disposal procedures."
  },
  {
    prompt: "A manufacturer stores hazardous-waste containers beyond its allowed accumulation period without applying for a storage permit. Shipping records confirm the dates.",
    answer: "WASTE",
    explanation: "The extended on-site storage is a hazardous-waste compliance issue under RCRA and applicable state rules. Accumulation dates, generator status, manifests, and permit records will be critical."
  },
  {
    prompt: "A waste hauler takes a load of listed hazardous waste to a facility that is not identified on the manifest. The driver later changes the destination by hand without an explanation.",
    answer: "WASTE",
    explanation: "Transportation and tracking of hazardous waste make waste the main issue. The legal team should compare the manifest, transporter records, receiving records, and authorized routing requirements."
  },
  {
    prompt: "An auto-repair business drains used solvent into open pans and leaves them outdoors. Rainwater has entered the pans, but there is no evidence of a release to soil or water.",
    answer: "WASTE",
    explanation: "Based on the stated facts, hazardous-waste handling is the main issue. The team should still investigate whether any release occurred and should review container, labeling, storage, and disposal records."
  },
  {
    prompt: "A facility's compliance manual says employees must inspect the hazardous-waste area each week. The inspection forms are blank, although staff insist the checks occurred.",
    answer: "WASTE",
    explanation: "Missing hazardous-waste inspection records make waste compliance the primary issue. Good procedures are not enough if required inspections and documentation cannot be shown during an agency review."
  },
  {
    prompt: "PA DEP inspectors find incompatible hazardous wastes stored next to each other at a commercial treatment facility. The facility's emergency plan has not been updated after a recent expansion.",
    answer: "WASTE",
    explanation: "Storage practices at a hazardous-waste facility make waste the central issue. The paralegal should organize permit conditions, inspection findings, emergency plans, training records, and corrective actions."
  },
  {
    prompt: "A buyer is considering a former plating plant. Soil samples show metals near old floor drains, and buried drums appear on a historic site map.",
    answer: "LAND / SITE",
    explanation: "Contaminated soil and buried waste make the property itself the main issue. The legal team should examine environmental assessments, sampling data, disposal history, and potential cleanup liability before closing."
  },
  {
    prompt: "EPA sends a letter to several companies that shipped waste to an abandoned disposal site in the 1970s. The agency asks for information about each company's shipments.",
    answer: "LAND / SITE",
    explanation: "The abandoned disposal site raises CERCLA or Superfund cleanup liability. Liability can reach certain generators and arrangers, so old contracts, invoices, manifests, and corporate records may be important."
  },
  {
    prompt: "A dry cleaner discovers solvent contamination beneath its building and in neighboring soil. The current owner says the leak began under a prior owner decades ago.",
    answer: "LAND / SITE",
    explanation: "Subsurface contamination makes land and site cleanup the main issue. CERCLA and state cleanup law may require investigation of current and past owners, operators, releases, and response costs."
  },
  {
    prompt: "Children regularly play on a vacant lot that once held a battery-recycling operation. Surface-soil testing shows elevated lead levels.",
    answer: "LAND / SITE",
    explanation: "Contaminated soil at a former industrial site is the primary concern. The file may involve cleanup authority, exposure evidence, property history, and urgent measures to limit contact with the site."
  },
  {
    prompt: "A leaking underground tank at a closed gas station has contaminated soil and groundwater. The owner has reports for the soil but none showing how far the plume has moved.",
    answer: "LAND / SITE",
    explanation: "The release and contaminated property make land and site investigation central. The legal team should identify applicable tank and cleanup programs and collect sampling, plume, repair, and agency records."
  },
  {
    prompt: "A city plans to convert a former foundry into housing. Historical records mention sand disposal areas, but the environmental assessment reviewed only the main building.",
    answer: "LAND / SITE",
    explanation: "The former industrial property's history points to a land and site issue. Additional investigation may be needed to define recognized conditions, sampling needs, cleanup obligations, and redevelopment risks."
  },
  {
    prompt: "An owner receives a demand for cleanup costs at a Superfund site even though it did not cause the original dumping. The file contains no review of statutory defenses or liability protections.",
    answer: "LAND / SITE",
    explanation: "The demand concerns CERCLA site liability. CERCLA can impose strict liability on categories of responsible parties, so the legal team should examine ownership history, contractual relationships, due diligence, and available protections."
  },
  {
    prompt: "Residents sue over illnesses they attribute to chemicals released from a nearby plant. Medical histories show several possible causes, and exposure levels differ among plaintiffs.",
    answer: "LAND / SITE",
    explanation: "The alleged contamination and exposure source make this a site-related toxic tort. Causation will be a major litigation issue, so exposure pathways, timing, medical records, experts, and alternative causes must be organized carefully."
  },
  {
    prompt: "A company manufactures a new industrial chemical that is not listed on EPA's chemical inventory. The product team wants to begin sales next week.",
    question: "WHICH LAW SHOULD YOU INVESTIGATE?",
    options: ["CLEAN AIR ACT", "CLEAN WATER ACT", "RCRA", "TSCA"],
    answer: "TSCA",
    explanation: "TSCA gives EPA authority to review many new chemicals before they enter commerce and to address unreasonable risks. The team should confirm inventory status, required notices, exemptions, and agency correspondence before sales begin."
  },
  {
    prompt: "A functioning factory accumulates hazardous waste in labeled containers before scheduled off-site shipment. No release or old contamination is reported.",
    question: "WHICH LAW SHOULD YOU INVESTIGATE?",
    options: ["RCRA", "CERCLA", "CLEAN AIR ACT", "NEPA"],
    answer: "RCRA",
    explanation: "RCRA generally governs ongoing hazardous-waste generation, storage, transport, treatment, and disposal. CERCLA is more closely associated with releases, threatened releases, and cleanup of contaminated sites."
  },
  {
    prompt: "An abandoned dump is leaking hazardous substances, and EPA is seeking parties to perform or pay for cleanup.",
    question: "WHICH LAW SHOULD YOU INVESTIGATE?",
    options: ["RCRA", "CERCLA", "CLEAN AIR ACT", "TSCA"],
    answer: "CERCLA",
    explanation: "CERCLA, commonly called Superfund, authorizes responses to releases or threatened releases of hazardous substances and allows EPA to pursue responsible parties. Site history and links to owners, operators, arrangers, and transporters are central."
  },
  {
    prompt: "A facility says its wastewater discharge is authorized, but the file has only a one-page permit summary from ten years ago. Recent sampling shows several exceedances.",
    question: "WHAT SHOULD THE LEGAL TEAM INVESTIGATE NEXT?",
    options: ["CURRENT PERMIT", "PROPERTY DEED", "WASTE MANIFESTS", "TRUCK LOGS"],
    answer: "CURRENT PERMIT",
    explanation: "The current permit contains the enforceable discharge limits, monitoring duties, and reporting terms. The team should obtain the complete permit and compare it with sampling data and discharge reports."
  },
  {
    prompt: "A purchaser learns that a vacant parcel hosted several manufacturers over 80 years. No sampling has been done, and the seller provides only the latest deed.",
    question: "WHAT SHOULD THE LEGAL TEAM INVESTIGATE NEXT?",
    options: ["AIR MODEL", "PROPERTY HISTORY", "STACK TEST", "SEWER BILL"],
    answer: "PROPERTY HISTORY",
    explanation: "Past uses may reveal disposal areas, tanks, spills, or operations that require further environmental review. A careful property history helps the legal team identify missing facts and plan appropriate due diligence."
  },
  {
    prompt: "A community complaint concerns odors, truck traffic, a nearby stream, and a proposed waste-facility expansion. The permit materials appear in both state and federal databases.",
    question: "WHO MAY BE INVOLVED?",
    options: ["EPA", "PA DEP", "LOCAL AGENCY", "MORE THAN ONE"],
    answer: "MORE THAN ONE",
    explanation: "Environmental matters can involve overlapping federal, state, and local authority. The team should identify each agency's role, collect every applicable permit, and avoid assuming one regulator's file is complete."
  },
  {
    prompt: "PA DEP issues an order alleging permit violations, neighbors file a damages suit, and EPA requests monitoring data about the same facility.",
    question: "WHAT TYPE OF LEGAL ISSUE IS THIS?",
    options: ["COMPLIANCE", "ENFORCEMENT", "CIVIL LITIGATION", "MORE THAN ONE"],
    answer: "MORE THAN ONE",
    explanation: "The facts involve regulatory compliance, agency enforcement, and private civil litigation. The legal team will need coordinated records, consistent timelines, and careful handling of materials used across the matters."
  },
  {
    prompt: "A low-income neighborhood already borders a highway, rail yard, and waste-transfer station. Residents say they received little notice before another polluting facility was proposed.",
    question: "WHAT CONCERN IS BEING RAISED?",
    options: ["WETLANDS", "AIR PERMITTING", "WASTE TRANSPORT", "ENVIRONMENTAL JUSTICE"],
    answer: "ENVIRONMENTAL JUSTICE",
    explanation: "The concentration of burdens and limited public participation raise environmental-justice concerns. The review should document community conditions, cumulative impacts, notice, language access, and opportunities for meaningful involvement."
  },
  {
    prompt: "A client denies shipping waste to a cleanup site. The opposing party produces a spreadsheet, but the underlying shipping papers are missing.",
    question: "WHAT SHOULD THE LEGAL TEAM INVESTIGATE NEXT?",
    options: ["AIR PERMIT", "WASTE RECORDS", "WETLAND MAP", "STACK HEIGHT"],
    answer: "WASTE RECORDS",
    explanation: "Original manifests, invoices, transporter logs, and receiving records may confirm or challenge the spreadsheet. Good document organization can connect a generator to a site or reveal gaps in the alleged chain."
  },
  {
    prompt: "An inspector finds repeated missed checks required by the facility's permit. The company has a detailed compliance manual, but employees followed a different unwritten routine.",
    question: "WHAT TYPE OF LEGAL ISSUE IS THIS?",
    options: ["COMPLIANCE", "PROPERTY SALE", "TOXIC TORT", "WETLANDS"],
    answer: "COMPLIANCE",
    explanation: "The gap between required procedures and actual practice is a regulatory-compliance issue. The legal team should compare permit terms, the manual, training records, completed logs, and employee accounts."
  },
  {
    prompt: "A resident alleges headaches from a nearby facility. The file does not show which chemical was released, when exposure occurred, or whether the chemical can cause the claimed harm.",
    question: "WHAT SHOULD THE LEGAL TEAM INVESTIGATE NEXT?",
    options: ["CAUSATION FACTS", "PROPERTY TAX", "DEED HISTORY", "WASTE ROUTE"],
    answer: "CAUSATION FACTS",
    explanation: "A toxic-tort claim requires careful attention to exposure and causation, not just the presence of a facility. The team should gather chemical, dose, timing, pathway, medical, and alternative-cause evidence for attorney and expert review."
  },
  {
    prompt: "A facility's discharge permit is issued by PA DEP under an EPA-approved program. A manager argues that federal law no longer matters because the state issued the permit.",
    question: "WHO MAY BE INVOLVED?",
    options: ["EPA", "PA DEP", "LOCAL AGENCY", "MORE THAN ONE"],
    answer: "MORE THAN ONE",
    explanation: "PA DEP may administer the permit while EPA retains federal oversight responsibilities. The paralegal should track both state and federal authority, records, deadlines, and communications."
  },
  {
    prompt: "A developer has maps showing wet soils, water-loving vegetation, and seasonal ponding where a parking lot is planned. No agency determination appears in the file.",
    question: "WHAT SHOULD THE LEGAL TEAM INVESTIGATE NEXT?",
    options: ["WETLAND REVIEW", "AIR MONITORING", "WASTE MANIFEST", "TOXIC TORT"],
    answer: "WETLAND REVIEW",
    explanation: "Soils, vegetation, and hydrology are important to identifying wetlands. A qualified delineation and agency jurisdictional or permit review may be necessary before fill or construction begins."
  },
  {
    prompt: "An agency notice cites late reports, missing sampling results, and inconsistent inspection logs. The facility manager says the equipment was operating normally.",
    question: "WHAT SHOULD THE LEGAL TEAM INVESTIGATE NEXT?",
    options: ["DOCUMENTATION", "PROPERTY HISTORY", "MEDICAL RECORDS", "LAND SURVEY"],
    answer: "DOCUMENTATION",
    explanation: "Environmental compliance often depends on required monitoring, reporting, and recordkeeping as well as equipment operation. The team should build a complete timeline and identify missing, late, or contradictory records."
  },
  {
    prompt: "A company imports a chemical mixture for industrial use. No one checked whether import certifications or other chemical-control requirements apply.",
    question: "WHICH LAW SHOULD YOU INVESTIGATE?",
    options: ["CERCLA", "TSCA", "CLEAN WATER ACT", "RCRA"],
    answer: "TSCA",
    explanation: "TSCA covers many industrial chemicals and includes import-related requirements. The legal team should confirm the mixture's substances, inventory status, certifications, restrictions, and any applicable exclusions."
  }
];

const elements = {
  home: document.querySelector("#home-screen"),
  play: document.querySelector("#play-screen"),
  end: document.querySelector("#end-screen"),
  meta: document.querySelector("#game-meta"),
  progress: document.querySelector("#progress"),
  score: document.querySelector("#score"),
  fileNumber: document.querySelector("#file-number"),
  questionType: document.querySelector("#question-type"),
  scenario: document.querySelector("#scenario-text"),
  card: document.querySelector("#scenario-card"),
  answers: document.querySelector("#answer-buttons"),
  feedback: document.querySelector("#feedback"),
  feedbackTitle: document.querySelector("#feedback-title"),
  feedbackText: document.querySelector("#feedback-text"),
  next: document.querySelector("#next-button"),
  answeredResult: document.querySelector("#answered-result"),
  correctResult: document.querySelector("#correct-result"),
  percentResult: document.querySelector("#percent-result")
};

let remainingDeck = [];
let round = [];
let roundIndex = 0;
let answered = 0;
let correct = 0;
let locked = false;

function shuffle(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function showScreen(name) {
  elements.home.hidden = name !== "home";
  elements.play.hidden = name !== "play";
  elements.end.hidden = name !== "end";
  elements.meta.hidden = name !== "play";
}

function refillDeck() {
  remainingDeck = shuffle(cards);
}

function drawRound() {
  if (remainingDeck.length < ROUND_LENGTH) refillDeck();
  round = remainingDeck.splice(0, ROUND_LENGTH);
  roundIndex = 0;
}

function startFresh() {
  answered = 0;
  correct = 0;
  refillDeck();
  drawRound();
  showScreen("play");
  renderCard();
}

function reviewMore() {
  drawRound();
  showScreen("play");
  renderCard();
}

function renderCard() {
  const card = round[roundIndex];
  const options = card.options || MAIN_ANSWERS;
  locked = false;

  elements.fileNumber.textContent = `FILE ${String(answered + 1).padStart(2, "0")}`;
  elements.questionType.textContent = card.question || "WHAT'S THE MAIN ISSUE?";
  elements.scenario.textContent = card.prompt;
  elements.progress.textContent = `File ${roundIndex + 1} of ${round.length}`;
  elements.score.textContent = `${correct} correct`;
  elements.feedback.hidden = true;
  elements.feedback.classList.remove("is-wrong");
  elements.answers.innerHTML = "";

  options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    button.dataset.answer = option;
    button.textContent = option;
    button.setAttribute("aria-label", `${index + 1}. ${option}`);
    button.addEventListener("click", () => chooseAnswer(option));
    elements.answers.append(button);
  });

  elements.card.focus({ preventScroll: true });
}

function chooseAnswer(choice) {
  if (locked) return;
  locked = true;

  const card = round[roundIndex];
  const isCorrect = choice === card.answer;
  answered += 1;
  if (isCorrect) correct += 1;

  [...elements.answers.children].forEach((button) => {
    button.disabled = true;
    if (button.dataset.answer === card.answer) button.classList.add("is-correct");
    else if (button.dataset.answer === choice) button.classList.add("is-wrong");
    else button.classList.add("is-muted");
  });

  elements.feedbackTitle.textContent = isCorrect ? card.answer : `THE MAIN ISSUE IS ${card.answer}`;
  elements.feedbackText.textContent = card.explanation;
  elements.feedback.classList.toggle("is-wrong", !isCorrect);
  elements.feedback.hidden = false;
  elements.score.textContent = `${correct} correct`;
  elements.next.textContent = roundIndex === round.length - 1 ? "SEE RESULTS" : "NEXT FILE";
  elements.next.focus();
}

function nextCard() {
  if (!locked) return;
  if (roundIndex >= round.length - 1) {
    showResults();
    return;
  }
  roundIndex += 1;
  renderCard();
}

function showResults() {
  const percent = answered ? Math.round((correct / answered) * 100) : 0;
  elements.answeredResult.textContent = String(answered);
  elements.correctResult.textContent = String(correct);
  elements.percentResult.textContent = `${percent}%`;
  showScreen("end");
  document.querySelector("#end-title").focus?.();
}

document.querySelector("#start-button").addEventListener("click", startFresh);
document.querySelector("#play-again-button").addEventListener("click", startFresh);
document.querySelector("#more-files-button").addEventListener("click", reviewMore);
document.querySelector("#stop-button").addEventListener("click", showResults);
document.querySelector("#next-button").addEventListener("click", nextCard);
document.querySelector("#home-button").addEventListener("click", () => showScreen("home"));

document.addEventListener("keydown", (event) => {
  if (elements.play.hidden) return;

  if (event.key === "Enter" && locked) {
    nextCard();
    return;
  }

  const number = Number(event.key);
  if (!locked && number >= 1 && number <= 4) {
    const button = elements.answers.children[number - 1];
    button?.click();
  }
});

showScreen("home");
