const fs = require('fs');
const csvWriter = require('csv-write-stream');
const img = require('./images.js');

var counter = 0;


// Environment variables for generating data
const MAX_HOUSES = 10; // Number of records to create (ids are zero-indexed)
const START_ID = 0; // id to start at when generating ids (in case you're appending data to .csv file)
const sendHeaders = false; // Whether column headers should be sent to .csv file as first line
const OUTPUT_FILE = 'data_id.csv'; // Filename of the output .csv file
const APPEND_TO_FILE = false; // Whether the .csv file should append to an existing file or start a new file

// Data variables
const HOUSE_TYPE = ['ENTIRE HOUSE', 'ENTIRE APARTMENT', 'PRIVATE ROOM', 'SHARED ROOM'];
const DESCRIPTION = ['Cozy house in friendly neiborhood', 'Spacious apartment', 'Sunny, Modern room', 'Penthouse Studio', 'Perfect Weekender'];
const CITIES = ["Aberdeen", "Abilene", "Akron", "Albany", "Albuquerque", "Alexandria", "Allentown", "Amarillo", "Anaheim", "Anchorage", "Ann Arbor", "Antioch", "Apple Valley", "Appleton", "Arlington", "Arvada", "Asheville", "Athens", "Atlanta", "Atlantic City", "Augusta", "Aurora", "Austin", "Bakersfield", "Baltimore", "Barnstable", "Baton Rouge", "Beaumont", "Bel Air", "Bellevue", "Berkeley", "Bethlehem", "Billings", "Birmingham", "Bloomington", "Boise", "Boise City", "Bonita Springs", "Boston", "Boulder", "Bradenton", "Bremerton", "Bridgeport", "Brighton", "Brownsville", "Bryan", "Buffalo", "Burbank", "Burlington", "Cambridge", "Canton", "Cape Coral", "Carrollton", "Cary", "Cathedral City", "Cedar Rapids", "Champaign", "Chandler", "Charleston", "Charlotte", "Chattanooga", "Chesapeake", "Chicago", "Chula Vista", "Cincinnati", "Clarke County", "Clarksville", "Clearwater", "Cleveland", "College Station", "Colorado Springs", "Columbia", "Columbus", "Concord", "Coral Springs", "Corona", "Corpus Christi", "Costa Mesa", "Dallas", "Daly City", "Danbury", "Davenport", "Davidson County", "Dayton", "Daytona Beach", "Deltona", "Denton", "Denver", "Des Moines", "Detroit", "Downey", "Duluth", "Durham", "El Monte", "El Paso", "Elizabeth", "Elk Grove", "Elkhart", "Erie", "Escondido", "Eugene", "Evansville", "Fairfield", "Fargo", "Fayetteville", "Fitchburg", "Flint", "Fontana", "Fort Collins", "Fort Lauderdale", "Fort Smith", "Fort Walton Beach", "Fort Wayne", "Fort Worth", "Frederick", "Fremont", "Fresno", "Fullerton", "Gainesville", "Garden Grove", "Garland", "Gastonia", "Gilbert", "Glendale", "Grand Prairie", "Grand Rapids", "Grayslake", "Green Bay", "GreenBay", "Greensboro", "Greenville", "Gulfport-Biloxi", "Hagerstown", "Hampton", "Harlingen", "Harrisburg", "Hartford", "Havre de Grace", "Hayward", "Hemet", "Henderson", "Hesperia", "Hialeah", "Hickory", "High Point", "Hollywood", "Honolulu", "Houma", "Houston", "Howell", "Huntington", "Huntington Beach", "Huntsville", "Independence", "Indianapolis", "Inglewood", "Irvine", "Irving", "Jackson", "Jacksonville", "Jefferson", "Jersey City", "Johnson City", "Joliet", "Kailua", "Kalamazoo", "Kaneohe", "Kansas City", "Kennewick", "Kenosha", "Killeen", "Kissimmee", "Knoxville", "Lacey", "Lafayette", "Lake Charles", "Lakeland", "Lakewood", "Lancaster", "Lansing", "Laredo", "Las Cruces", "Las Vegas", "Layton", "Leominster", "Lewisville", "Lexington", "Lincoln", "Little Rock", "Long Beach", "Lorain", "Los Angeles", "Louisville", "Lowell", "Lubbock", "Macon", "Madison", "Manchester", "Marina", "Marysville", "McAllen", "McHenry", "Medford", "Melbourne", "Memphis", "Merced", "Mesa", "Mesquite", "Miami", "Milwaukee", "Minneapolis", "Miramar", "Mission Viejo", "Mobile", "Modesto", "Monroe", "Monterey", "Montgomery", "Moreno Valley", "Murfreesboro", "Murrieta", "Muskegon", "Myrtle Beach", "Naperville", "Naples", "Nashua", "Nashville", "New Bedford", "New Haven", "New London", "New Orleans", "New York", "New York City", "Newark", "Newburgh", "Newport News", "Norfolk", "Normal", "Norman", "North Charleston", "North Las Vegas", "North Port", "Norwalk", "Norwich", "Oakland", "Ocala", "Oceanside", "Odessa", "Ogden", "Oklahoma City", "Olathe", "Olympia", "Omaha", "Ontario", "Orange", "Orem", "Orlando", "Overland Park", "Oxnard", "Palm Bay", "Palm Springs", "Palmdale", "Panama City", "Pasadena", "Paterson", "Pembroke Pines", "Pensacola", "Peoria", "Philadelphia", "Phoenix", "Pittsburgh", "Plano", "Pomona", "Pompano Beach", "Port Arthur", "Port Orange", "Port Saint Lucie", "Port St. Lucie", "Portland", "Portsmouth", "Poughkeepsie", "Providence", "Provo", "Pueblo", "Punta Gorda", "Racine", "Raleigh", "Rancho Cucamonga", "Reading", "Redding", "Reno", "Richland", "Richmond", "Richmond County", "Riverside", "Roanoke", "Rochester", "Rockford", "Roseville", "Round Lake Beach", "Sacramento", "Saginaw", "Saint Louis", "Saint Paul", "Saint Petersburg", "Salem", "Salinas", "Salt Lake City", "San Antonio", "San Bernardino", "San Buenaventura", "San Diego", "San Francisco", "San Jose", "Santa Ana", "Santa Barbara", "Santa Clara", "Santa Clarita", "Santa Cruz", "Santa Maria", "Santa Rosa", "Sarasota", "Savannah", "Scottsdale", "Scranton", "Seaside", "Seattle", "Sebastian", "Shreveport", "Simi Valley", "Sioux City", "Sioux Falls", "South Bend", "South Lyon", "Spartanburg", "Spokane", "Springdale", "Springfield", "St. Louis", "St. Paul", "St. Petersburg", "Stamford", "Sterling Heights", "Stockton", "Sunnyvale", "Syracuse", "Tacoma", "Tallahassee", "Tampa", "Temecula", "Tempe", "Thornton", "Thousand Oaks", "Toledo", "Topeka", "Torrance", "Trenton", "Tucson", "Tulsa", "Tuscaloosa", "Tyler", "Utica", "Vallejo", "Vancouver", "Vero Beach", "Victorville", "Virginia Beach", "Visalia", "Waco", "Warren", "Washington", "Waterbury", "Waterloo", "West Covina", "West Valley City", "Westminster", "Wichita", "Wilmington", "Winston", "Winter Haven", "Worcester", "Yakima", "Yonkers", "York", "Youngstown"];
const COST = [35, 7500]; // Cost per night minimum and maximum values ($)
const RATING = [0, 5]; // Rating scale range minimum and maximum
const VOTES = [0, 3500] // Number of votes minimum and maximum values

class Writer {

  constructor(file) {
    this.writer = csvWriter({ sendHeaders });
    this.writer.pipe(fs.createWriteStream(file, { flags: APPEND_TO_FILE ? 'a' : 'w' }));
  }

  write(obj) {
    // if .write returns false we have to wait until `drain` is emitted
    if (!this.writer.write(obj))
      return new Promise(resolve => this.writer.once('drain', resolve))

    return true;
  }

  end(counter, t1) {
    console.log(`Generated ${counter} records in ${Math.abs(t1 / 1000)} seconds successfully.`)
    // Wrap it in a promise if you wish to wait for the callback.
    this.writer.end();
  }
}

(async () => {
  const writer = new Writer(OUTPUT_FILE);
  let t0 = new Date().getTime();

  for (let i = 0; i < MAX_HOUSES; i++) {
    const res = writer.write({
      id: counter + START_ID, // Comment out this line if ids aren't required in .csv file
      img: img.getImg(),
      house_type: HOUSE_TYPE[Math.floor(Math.random() * HOUSE_TYPE.length)],
      location: CITIES[Math.floor(Math.random() * CITIES.length)],
      description: DESCRIPTION[Math.floor(Math.random() * DESCRIPTION.length)],
      cost_per_night: Math.floor(Math.random() * (COST[1] - COST[0]) + COST[0]),
      rating: (Math.random() * (RATING[1] - RATING[0]) + RATING[0]).toFixed(2),
      votes: Math.floor(Math.random() * (VOTES[1] - VOTES[0]) + VOTES[0])
    });
    if (res instanceof Promise) {
      await res;
    }
    counter += 1;
  }
  let t1 = new Date().getTime() - t0;
  writer.end(counter, t1);
})();
