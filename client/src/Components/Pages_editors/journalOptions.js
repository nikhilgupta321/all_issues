const journalOptions = [
  { value: '', label: 'Select Journal' },
  { value: '17', label: 'European Journal of Biotechnology and Bioscience', domain: 'https://www.biosciencejournals.com' },
  { value: '2', label: 'International Journal of Academic Research and Development', domain: 'https://www.multidisciplinaryjournal.in' },
  { value: '4', label: 'International Journal of Advanced Education and Research', domain: 'https://www.multidisciplinaryjournals.net' },
  { value: '6', label: 'International Journal of Advanced Educational Research', domain: 'https://www.multidisciplinaryjournals.org' },
  { value: '27', label: 'International Journal of Advanced Engineering and Technology', domain: 'https://www.allengineeringjournal.com' },
  { value: '3', label: 'International Journal of Advanced Research and Development', domain: 'https://www.multidisciplinaryjournal.net' },
  { value: '10', label: 'International Journal of Advanced Science and Research', domain: 'https://www.allsciencejournal.com' },
  { value: '9', label: 'International Journal of Advanced Scientific Research', domain: 'https://www.multidisciplinaryarticle.com' },
  { value: '32', label: 'International Journal of Agriculture and Plant Science', domain: 'https://www.agriculturejournal.in' },
  { value: '18', label: 'International Journal of Biology Research', domain: 'https://www.biologyjournal.in' },
  { value: '33', label: 'International Journal of Biotechnology and Microbiology', domain: 'https://www.biotechnologyjournals.com' },
  { value: '16', label: 'International Journal of Botany Studies', domain: 'https://www.botanyjournals.com' },
  { value: '20', label: 'International Journal of Chemical Science', domain: 'https://www.chemicaljournals.com' },
  { value: '19', label: 'International Journal of Chemistry Studies', domain: 'https://www.chemistryjournal.in' },
  { value: '34', label: 'International Journal of Commerce and Economics', domain: 'https://www.commercejournal.in' },
  { value: '13', label: 'International Journal of Commerce and Management Research', domain: 'https://www.managejournal.com' },
  { value: '120', label: 'International Journal of Dental Research', domain: 'https://www.dentaljournal.net' },
  { value: '90', label: 'International Journal of Dental Sciences', domain: 'https://www.dentaljournal.in' },
  { value: '58', label: 'International Journal of Ecology and Environmental Sciences', domain: 'https://www.ecologyjournal.in' },
  { value: '61', label: 'International Journal of Educational Research and Development', domain: 'https://www.multidisciplinaryarticle.net' },
  { value: '62', label: 'International Journal of Educational Research and Studies', domain: 'https://www.multidisciplinaryarticle.org' },
  { value: '30', label: 'International Journal of English Research', domain: 'https://www.englishjournals.com' },
  { value: '23', label: 'International Journal of Entomology Research', domain: 'https://www.entomologyjournals.com' },
  { value: '59', label: 'International Journal of Environmental and Ecology Research', domain: 'https://www.environmentaljournal.in' },
  { value: '57', label: 'International Journal of Finance and Commerce', domain: 'https://www.commercejournals.com' },
  { value: '25', label: 'International Journal of Fisheries and Aquatic Research', domain: 'https://www.fishjournals.com' },
  { value: '15', label: 'International Journal of Food Science and Nutrition', domain: 'https://www.foodsciencejournal.com' },
  { value: '87', label: 'International Journal of Gynaecology and Obstetrics Research', domain: 'https://www.gynaecologyjournal.in' },
  { value: '31', label: 'International Journal of Hindi Research', domain: 'https://www.hindijournal.com' },
  { value: '14', label: 'International Journal of Humanities and Social Science Research', domain: 'https://www.socialsciencejournal.in' },
  { value: '29', label: 'International Journal of Law', domain: 'https://www.lawjournals.org' },
  { value: '63', label: 'International Journal of Law, Policy and Social Review', domain: 'https://www.lawjournals.net' },
  { value: '148', label: 'International Journal of Management and Commerce', domain: 'https://www.managementjournal.in' },
  { value: '64', label: 'International Journal of Management and Economics', domain: 'https://www.managementjournals.net' },
  { value: '11', label: 'International Journal of Medical and Health Research', domain: 'https://www.medicalsciencejournal.com' },
  { value: '43', label: 'International Journal of Medical Science and Clinical Research', domain: 'https://www.journalofmedical.com' },
  { value: '65', label: 'International Journal of Medical Science and Research', domain: 'https://www.medicaljournals.in' },
  { value: '12', label: 'International Journal of Medicine Research', domain: 'https://www.medicinesjournal.com' },
  { value: '5', label: 'International Journal of Multidisciplinary Education and Research', domain: 'https://www.multidisciplinaryjournals.in' },
  { value: '1', label: 'International Journal of Multidisciplinary Research and Development', domain: 'https://www.allsubjectjournal.com' },
  { value: '95', label: 'International Journal of Nursing and Health Research', domain: 'https://www.nursingjournal.in' },
  { value: '86', label: 'International Journal of Orthopaedics Research', domain: 'https://www.orthopaedicsjournal.in' },
  { value: '22', label: 'International Journal of Pharmaceutical Science and Research', domain: 'https://www.pharmacyjournal.net' },
  { value: '149', label: 'International Journal of Physical Education, Exercise and Sports', domain: 'https://www.physicaleducationjournal.com' },
  { value: '89', label: 'International Journal of Radiology Research', domain: 'https://www.radiologyjournal.in' },
  { value: '26', label: 'International Journal of Research in Advanced Engineering and Technology', domain: 'https://www.allengineeringjournal.in' },
  { value: '21', label: 'International Journal of Research in Pharmacy and Pharmaceutical Sciences', domain: 'https://www.pharmacyjournal.in' },
  { value: '75', label: 'International Journal of Social Research and Development', domain: 'https://www.socialsciencejournal.net' },
  { value: '60', label: 'International Journal of Social Science and Humanities', domain: 'https://www.humanitiesjournals.com' },
  { value: '39', label: 'International Journal of Sociology and Political Science', domain: 'https://www.sociologyjournal.in' },
  { value: '124', label: 'International Journal of Surgery and Surgical Research', domain: 'https://www.surgeryjournals.net' },
  { value: '94', label: 'International Journal of Surgery Research', domain: 'https://www.surgeryjournal.in' },
  { value: '28', label: 'International Journal of Yoga, Physiotherapy and Physical Education', domain: 'https://www.sportsjournal.in' },
  { value: '24', label: 'International Journal of Zoology Studies', domain: 'https://www.zoologyjournals.com' },
  { value: '8', label: 'National Journal of Advanced Research', domain: 'https://www.multidisciplinaryarticle.in' },
  { value: '7', label: 'National Journal of Multidisciplinary Research and Development', domain: 'https://www.multidisciplinaryjournal.org' },
  { value: '44', label: 'Sanskritik aur Samajik Anusandhan', domain: '' },
  { value: '78', label: 'International Journal of Research in Hindi', domain: '' }
];

export default journalOptions