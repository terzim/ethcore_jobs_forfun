// To apply as a JS wiz/full stack guy or gal, give us some code (info@ethcore.io) that processes this into a lovely-looking web (HTML/CSS/JS) document
var job = {
	"headline": "Javascript wizard with good sense of design",
	"essentials": {
		"locations": ["berlin", "london"],
		"employment": EmploymentType().Permanent,
		"startdate": (new Date()).getTime(),
		"salary": {
			"status": TaxStatus().Gross,
			"interval": Interval().Year,
			"currency": "GBP",
			"amount": 35000,
			"stockoptions": true,
		},
		"industry": "Blockchain",
		"companysize": CompanySize().TenToTwenty,
		"teamsize": { "min": 1, "max": 5 },
	},
	"methodology": {
		"codereviews": true,
		"prototyping": true,
		"pairprogramming": true,
		"failfast": true,
		"unittests": true,
		"integrationtests": true,
		"buildserver": BuildServers().Travis,
		"staticcodeanalysis": CodeAnalysisTools().NotYetChosen,
		"versioncontrol": VersionControlSystem().Git,
		"issuetracker": IssueTrackers().GitHub,
		"knowledgerepo": KnowledgeRepos().GitHubWiki,
		"standups": true,
		"qaprotocol": true,
		"agilemanagement": AgileManagementSystems().Kanban,
		"freedomovertools": true,
		"onecommandbuild": true,
		"quickstart": true,
		"commitondayone": true,
	},
	"specs": {
		"workload": 1.0,
		"workweek": 40 * 60 * 60,
		"holidays": 20,
		"corehours": { from: 1100, to: 1700 },
		"travel": TravelOptions().Plentiful,
		"remote": RemoteWorking().Negotiable,
		"relocationpackage": RelocationPackages().Negotiable,
	},
	"profile": {
		"newfeatures": 70,
		"clientsupport": 20,
		"documentation": 10,
		"maintenance": 0,
		"meetings": 0,
	},
	"equipment": {
		"operatingsystem": [OperationSystems().MacOSX, OperationSystems().Ubuntu],
		"computer": MachineType().Laptop,
		"monitors": Monitors().Negotiable,
	},
	"technologies": {
		"css3": Level().Expert,
		"html5": Level().Expert,
		"javascript": Level().Expert,
		"node": Level().Expert,
		"rest": Level().Good,
		"jsonrpc": Level().Good,
		"uiux": Level().Good,
		"design": Level().Good,
		"oneof": {
			"junit": Level().Good,
			"mocha": Level().Good,
			"jasmine": Level().Good,
			"selenium": Level().Good,
		},
		"oneof": {
			"react": Level().Familiar,
			"meteor": Level().Familiar,
			"angular": Level().Familiar,
		},
		"p2p": Level().Familiar,
		"ethereum": Level().Familiar,
		"blockchain": Level().Familiar,
		"oneof": {
			"rust": Level().Familiar,
			"haskell": Level().Familiar,
			"ruby": Level().Familiar,
			"python": Level().Familiar,
			"cpp": Level().Familiar,
		},
		"gametheory": Level().Familiar,
		"cryptography": Level().Familiar,
		"boardgames": Level().Familiar,
	},
	"other": [
		"we do retreats",
		"we change the world",
		"best team around",
		"hardcore",
	],
	"misc": {
		"training": TrainingType().Informal,
		"fossphilosophy": FOSS().AlwaysOpen,
		"codingretreats": true,
		"conferences": [ConferencePotential().Speaking, ConferencePotential().Attending],
		"teamevents": true,
		"healthcare": true,
		"mobilephone": false,
		"kitchen": true,
		"canteen": false,
		"freestuff": ["coffee", "beverages", "snacks", "bikeparking", "playroom"],
	}
}

function EmploymentType() { return enumerate("Permanent", "Temporary", "Project"); }
function TaxStatus() { return enumerate("Gross", "Net"); }
function Interval() { return enumerate("Week", "Month", "Year"); }
function CompanySize() { return enumerate("LessThanTen", "TenToTwenty", "TwentyToFifty", "FiftyToTwoHundred", "MoreThanTwoHundred"); }
function VersionControlSystem() { return enumerate("NotYetChosen", "Git"); }
function IssueTrackers() { return enumerate("NotYetChosen", "GitHub"); }
function BuildServers() { return enumerate("NotYetChosen", "Jenkins", "Travis"); }
function CodeAnalysisTools() { return enumerate("NotYetChosen"); }
function KnowledgeRepos() { return enumerate("NotYetChosen", "GitHubWiki"); }
function AgileManagementSystems() { return enumerate("NotYetChosen", "Kanban"); }
function TravelOptions() { return enumerate("None", "Possible", "Plentiful"); }
function RemoteWorking() { return enumerate("No", "Negotiable", "Required"); }
function RelocationPackages() { return enumerate("Nonealse", "Negotiable"); }
function OperationSystems() { return enumerate("MacOSX", "Ubuntu", "Windows"); }
function MachineType() { return enumerate("Workstation", "Laptop"); }
function Monitors() { return enumerate("Negotiable"); }
function Level() { return enumerate("Familiar", "Good", "Expert"); }
function TrainingType() { return enumerate("None", "Informal", "Formal", "External"); }
function ConferencePotential() { return enumerate("Attending", "Speaking"); }
function FOSS() { return enumerate("Closed", "SometimesOpen", "AlwaysOpen"); }

//https://github.com/RougeWare/Micro-JS-Enum/tree/master/lib
function enumerate() { v=arguments;s={all:[],keys:v};for(i=v.length;i--;)s[v[i]]=s.all[i]=v[i];return s };
