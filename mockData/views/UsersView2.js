
export const cards1 = {
	viewId:'vw-102',
	userId:'ur-102',	//used for security in the database (must match current user to allow edit)
	docId:'doc-101',
	cardMap: {
		1: { id: 1, items: [{ id: 2 }, { id: 3 }] },
		2: { id: 2, items: [{ id: 4 }, { id: 5 }] },
		3: { id: 3, items: [] },
		4: { id: 4, items: [] },
		5: { id: 5, items: [{ id: 6 }] },
		6: { id: 6, items: [] }
	},
	cards:{
		1: {
			cardId: 1,
			tags: ['lesiure', 'sport', 'machines'],
			title: 'Which Bicycle Should I Buy user 2',
			imageUrl:
				'https://www.cyclingabout.com/wp-content/uploads/2014/01/wpid-Photo-29-Jan-2014-214-pm.jpg',
			notes: `If you’re in the market for a new bicycle, you’re in very good company. Since the start of 2020 all bike sales have risen by more than 50 percent, and even if you’re reading this guide in 2023, and perhaps sales have finally flattened, that will be at a new, higher bar. 
		
		The e-bike category in particular has seen astonishing growth lately.\t \t \t Why? \tOne effect of the pandemic was a resurgent interest in outdoor fitness (to avoid COVID-19), and once people rediscovered fresh air and mood-lifting daylight, lots of us realized we never wanted to head back inside for cardiovascular exercise.
		
		That, and a desire to pollute less, especially if you’re lucky enough to work from home, has led to a proliferation of many direct-to-consumer bicycle brands. (We’ll tackle how to buy a bicycle, electrified or not, below, but we’re planting a flag right here to caution that you should carefully read that section before jumping directly to a bike you’d order online.)`
		},
		2: {
			cardId: 2,
			url: 'https://en.wikipedia.org/wiki/Road_bicycle',
			allTags: ['road', 'sport'],
			title: 'Road Bikes u2',
			imageUrl: 'https://cdn.mos.cms.futurecdn.net/dpA5bpmPcBM6rPszKB9SpH-1200-80.jpg',
			notes:
				'A racing bicycle, also known as a road bike, and once popularly known as a ten speed, is a bicycle designed for competitive road cycling, a sport governed by and according to the rules of the Union Cycliste Internationale (UCI). The UCI rules were altered in 1934 to exclude recumbent bicycles.The most important characteristics about a racing bicycle are its weight and stiffness[citation needed] which determine the efficiency at which the power from a riders pedal strokes can be transferred to the drive-train and subsequently to its wheels. To this effect racing bicycles may sacrifice comfort for speed. The drop handlebars are positioned lower than the saddle in order to put the rider in a more aerodynamic posture. The front and back wheels are close together so the bicycle has quick handling. The derailleur gear ratios are closely spaced so that the rider can pedal at their optimum cadence. Other racing bicycles, especially those used in time trialling, prioritize aerodynamics over comfort. '
		},
		3: {
			cardId: 3,
			url: 'https://en.wikipedia.org/wiki/Mountain_biking',
			allTags: ['road', 'sport'],
			title: 'Tricycle u2',
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/MtnBiking_SedonaMag.jpg/250px-MtnBiking_SedonaMag.jpg',
			notes: 'Mountain bikeing is more fun and very dangerous, and soo exckting!'
		},
	
		4: {
			cardId: 4,
			url: 'https://www.trekbikes.com/us/en_US/',
			allTags: ['mountainbike', 'manufacturer'],
			title: 'Trek Mountain Bikes u2',
			imageUrl:
				'https://w7.pngwing.com/pngs/913/598/png-transparent-trek-bicycle-corporation-cycling-logo-triathlon-trekking-text-retail-bicycle-thumbnail.png',
			notes:
				'Trek started in a small Wisconsin barn in 1976, but our founders always saw something bigger. Forty-four years later, were on a mission to make our world a .'
		},
		5: {
			cardId: 5,
			url: 'https://www.trekbikes.com/us/en_US/',
			allTags: ['mountainbike', 'manufacturer'],
			title: 'Marin u2',
			imageUrl:
				'https://s3.us-east-1.amazonaws.com/craft-marinbikes/images/2020/mod/hero/image/_heroStandard2795X1310/22-headlands2-action-8_2022-01-04-105256_tsmh.jpg',
			notes:
				'Trek started in a small Wisconsin barn in 1976, but our founders always saw something bigger. Forty-four years later, were on a mission to make our world a .'
		},
		6: {
			cardId: 6,
			url: 'https://www.trekbikes.com/us/en_US/',
			allTags: ['mountainbike', 'manufacturer'],
			title: 'Kona u2',
			imageUrl: 'https://mbaction.com/wp-content/uploads/2022/01/M1_Kona_Honzo_Action_4_e-copy.jpg',
			notes:
				'Trek started in a small Wisconsin barn in 1976, but our founders always saw something bigger. Forty-four years later, were on a mission to make our world a .'
		}
	}


};
