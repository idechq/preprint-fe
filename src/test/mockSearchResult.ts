const mockSearchResult = [
  {
    "id": 0,
    "doi": "https://doi.org/10.1101/mock-article",
    "title": "Lorem Ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod sed do eiusmod Ipsum",
    "authors": ["Iyla Elliott", "Brady Figueroa", "Sulayman Howells", "Akash Jordan", "Imogen Conley", "Arda Lawson", "Shaurya Osborne", "Kurtis Burgess", "Marwah Levine", "John-James Ellis", "Pharrell Burgess", "Judah Miller", "Aneurin Medrano", "Nellie Cordova", "Georgie Townsend", "Charleigh Preece", "Chyna Sinclair", "Tiago Calvert"],
    "abstract": "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "teams": [
      {
        "teamName": "Edinburgh",
        "teamYear": 2021,
        "teamTracks": ["Molecular Evolutionary Machines", "Pathway Evolutionary Outcomes"],
        "teamWikiURL": "#",
        "teamPosterURL": "#",
        "teamPresentationURL": "#",
        "teamAwards": [],
      },
    ]
  },
  {
    "id": 1,
    "doi": "https://doi.org/10.1101/mock-article",
    "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel.",
    "authors": ["Chong Teng", "Junhao Lu", "Yang Liu",],
    "abstract": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta porttitor urna, eu placerat felis laoreet sit amet. Integer elementum mauris vitae fringilla bibendum. Donec tempor semper sem vitae cursus. Sed malesuada metus non ultricies iaculis. Integer vestibulum dapibus imperdiet. Maecenas posuere sagittis sodales. Pellentesque consectetur ipsum vitae lorem varius, ac maximus neque feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam imperdiet ipsum ut libero maximus scelerisque. Fusce metus ligula, commodo id est ut, aliquet venenatis odio. Sed id urna blandit, rutrum diam vitae, fringilla ipsum. Nunc in lacus vel ante blandit pharetra blandit vitae odio. Integer pharetra in purus ac hendrerit. Quisque sed metus ultricies, iaculis augue at, lobortis neque. Aliquam tincidunt faucibus dolor, et tempor leo vestibulum quis.Integer tempus nunc et justo tristique, bibendum blandit est porttitor. Nulla vestibulum ornare elit, sed consectetur magna blandit in. Sed in augue lobortis, efficitur augue in, congue eros. Donec consectetur massa nec sollicitudin varius. Aenean nec velit nunc. Nullam malesuada dolor odio, vel tristique diam placerat et. Duis non eros nunc. Aliquam luctus quis tellus sit amet vestibulum. Maecenas vitae erat libero. Quisque eros nisl, lacinia vitae dolor ac, imperdiet aliquam dolor. Nam auctor, sem ut consectetur ullamcorper.",
    "teams": [
      {
        "teamName": "Boston College",
        "teamYear": 2020,
        "teamTracks": ["Molecular Evolutionary Outcomes", "Genome Evolutionary Machines"],
        "teamWikiURL": "#",
        "teamPosterURL": "#",
        "teamPresentationURL": "#",
        "teamAwards": [],
      },
    ]
  },
  {
    "id": 2,
    "doi": "https://doi.org/10.1101/mock-article",
    "title": "Lorem Ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod sed do eiusmod Ipsum",
    "authors": ["Iyla Elliott", "Brady Figueroa", "Sulayman Howells", "Akash Jordan", "Imogen Conley", "Arda Lawson", "Shaurya Osborne", "Kurtis Burgess", "Marwah Levine", "John-James Ellis", "Pharrell Burgess", "Judah Miller", "Aneurin Medrano", "Nellie Cordova", "Georgie Townsend", "Charleigh Preece", "Chyna Sinclair", "Tiago Calvert"],
    "abstract": "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "teams": [
      {
        "teamName": "Edinburgh",
        "teamYear": 2021,
        "teamTracks": ["Molecular Evolutionary Machines", "Pathway Evolutionary Outcomes"],
        "teamWikiURL": "#",
        "teamPosterURL": "#",
        "teamPresentationURL": "#",
        "teamAwards": [],
      },
    ]
  },
  {
    "id": 3,
    "doi": "https://doi.org/10.1101/mock-article",
    "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel.",
    "authors": ["Chong Teng", "Junhao Lu", "Yang Liu",],
    "abstract": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta porttitor urna, eu placerat felis laoreet sit amet. Integer elementum mauris vitae fringilla bibendum. Donec tempor semper sem vitae cursus. Sed malesuada metus non ultricies iaculis. Integer vestibulum dapibus imperdiet. Maecenas posuere sagittis sodales. Pellentesque consectetur ipsum vitae lorem varius, ac maximus neque feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam imperdiet ipsum ut libero maximus scelerisque. Fusce metus ligula, commodo id est ut, aliquet venenatis odio. Sed id urna blandit, rutrum diam vitae, fringilla ipsum. Nunc in lacus vel ante blandit pharetra blandit vitae odio. Integer pharetra in purus ac hendrerit. Quisque sed metus ultricies, iaculis augue at, lobortis neque. Aliquam tincidunt faucibus dolor, et tempor leo vestibulum quis.Integer tempus nunc et justo tristique, bibendum blandit est porttitor. Nulla vestibulum ornare elit, sed consectetur magna blandit in. Sed in augue lobortis, efficitur augue in, congue eros. Donec consectetur massa nec sollicitudin varius. Aenean nec velit nunc. Nullam malesuada dolor odio, vel tristique diam placerat et. Duis non eros nunc. Aliquam luctus quis tellus sit amet vestibulum. Maecenas vitae erat libero. Quisque eros nisl, lacinia vitae dolor ac, imperdiet aliquam dolor. Nam auctor, sem ut consectetur ullamcorper.",
    "teams": [
      {
        "teamName": "Boston College",
        "teamYear": 2020,
        "teamTracks": ["Molecular Evolutionary Outcomes", "Genome Evolutionary Machines"],
        "teamWikiURL": "#",
        "teamPosterURL": "#",
        "teamPresentationURL": "#",
        "teamAwards": [],
      },
    ]
  },  {
    "id": 4,
    "doi": "https://doi.org/10.1101/mock-article",
    "title": "Lorem Ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod sed do eiusmod Ipsum",
    "authors": ["Iyla Elliott", "Brady Figueroa", "Sulayman Howells", "Akash Jordan", "Imogen Conley", "Arda Lawson", "Shaurya Osborne", "Kurtis Burgess", "Marwah Levine", "John-James Ellis", "Pharrell Burgess", "Judah Miller", "Aneurin Medrano", "Nellie Cordova", "Georgie Townsend", "Charleigh Preece", "Chyna Sinclair", "Tiago Calvert"],
    "abstract": "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "teams": [
      {
        "teamName": "Edinburgh",
        "teamYear": 2021,
        "teamTracks": ["Molecular Evolutionary Machines", "Pathway Evolutionary Outcomes"],
        "teamWikiURL": "#",
        "teamPosterURL": "#",
        "teamPresentationURL": "#",
        "teamAwards": [],
      },
    ]
  },
  {
    "id": 5,
    "doi": "https://doi.org/10.1101/mock-article",
    "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel.",
    "authors": ["Chong Teng", "Junhao Lu", "Yang Liu",],
    "abstract": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta porttitor urna, eu placerat felis laoreet sit amet. Integer elementum mauris vitae fringilla bibendum. Donec tempor semper sem vitae cursus. Sed malesuada metus non ultricies iaculis. Integer vestibulum dapibus imperdiet. Maecenas posuere sagittis sodales. Pellentesque consectetur ipsum vitae lorem varius, ac maximus neque feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam imperdiet ipsum ut libero maximus scelerisque. Fusce metus ligula, commodo id est ut, aliquet venenatis odio. Sed id urna blandit, rutrum diam vitae, fringilla ipsum. Nunc in lacus vel ante blandit pharetra blandit vitae odio. Integer pharetra in purus ac hendrerit. Quisque sed metus ultricies, iaculis augue at, lobortis neque. Aliquam tincidunt faucibus dolor, et tempor leo vestibulum quis.Integer tempus nunc et justo tristique, bibendum blandit est porttitor. Nulla vestibulum ornare elit, sed consectetur magna blandit in. Sed in augue lobortis, efficitur augue in, congue eros. Donec consectetur massa nec sollicitudin varius. Aenean nec velit nunc. Nullam malesuada dolor odio, vel tristique diam placerat et. Duis non eros nunc. Aliquam luctus quis tellus sit amet vestibulum. Maecenas vitae erat libero. Quisque eros nisl, lacinia vitae dolor ac, imperdiet aliquam dolor. Nam auctor, sem ut consectetur ullamcorper.",
    "teams": [
      {
        "teamName": "Boston College",
        "teamYear": 2020,
        "teamTracks": ["Molecular Evolutionary Outcomes", "Genome Evolutionary Machines"],
        "teamWikiURL": "#",
        "teamPosterURL": "#",
        "teamPresentationURL": "#",
        "teamAwards": [],
      },
    ]
  },
  {
    "id": 6,
    "doi": "https://doi.org/10.1101/mock-article",
    "title": "Lorem Ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod sed do eiusmod Ipsum",
    "authors": ["Iyla Elliott", "Brady Figueroa", "Sulayman Howells", "Akash Jordan", "Imogen Conley", "Arda Lawson", "Shaurya Osborne", "Kurtis Burgess", "Marwah Levine", "John-James Ellis", "Pharrell Burgess", "Judah Miller", "Aneurin Medrano", "Nellie Cordova", "Georgie Townsend", "Charleigh Preece", "Chyna Sinclair", "Tiago Calvert"],
    "abstract": "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "teams": [
      {
        "teamName": "Edinburgh",
        "teamYear": 2021,
        "teamTracks": ["Molecular Evolutionary Machines", "Pathway Evolutionary Outcomes"],
        "teamWikiURL": "#",
        "teamPosterURL": "#",
        "teamPresentationURL": "#",
        "teamAwards": [],
      },
    ]
  },
  {
    "id": 7,
    "doi": "https://doi.org/10.1101/mock-article",
    "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel.",
    "authors": ["Chong Teng", "Junhao Lu", "Yang Liu",],
    "abstract": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta porttitor urna, eu placerat felis laoreet sit amet. Integer elementum mauris vitae fringilla bibendum. Donec tempor semper sem vitae cursus. Sed malesuada metus non ultricies iaculis. Integer vestibulum dapibus imperdiet. Maecenas posuere sagittis sodales. Pellentesque consectetur ipsum vitae lorem varius, ac maximus neque feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam imperdiet ipsum ut libero maximus scelerisque. Fusce metus ligula, commodo id est ut, aliquet venenatis odio. Sed id urna blandit, rutrum diam vitae, fringilla ipsum. Nunc in lacus vel ante blandit pharetra blandit vitae odio. Integer pharetra in purus ac hendrerit. Quisque sed metus ultricies, iaculis augue at, lobortis neque. Aliquam tincidunt faucibus dolor, et tempor leo vestibulum quis.Integer tempus nunc et justo tristique, bibendum blandit est porttitor. Nulla vestibulum ornare elit, sed consectetur magna blandit in. Sed in augue lobortis, efficitur augue in, congue eros. Donec consectetur massa nec sollicitudin varius. Aenean nec velit nunc. Nullam malesuada dolor odio, vel tristique diam placerat et. Duis non eros nunc. Aliquam luctus quis tellus sit amet vestibulum. Maecenas vitae erat libero. Quisque eros nisl, lacinia vitae dolor ac, imperdiet aliquam dolor. Nam auctor, sem ut consectetur ullamcorper.",
    "teams": [
      {
        "teamName": "Boston College",
        "teamYear": 2020,
        "teamTracks": ["Molecular Evolutionary Outcomes", "Genome Evolutionary Machines"],
        "teamWikiURL": "#",
        "teamPosterURL": "#",
        "teamPresentationURL": "#",
        "teamAwards": [],
      },
    ]
  },
  {
    "id": 8,
    "doi": "https://doi.org/10.1101/mock-article",
    "title": "Lorem Ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod sed do eiusmod Ipsum",
    "authors": ["Iyla Elliott", "Brady Figueroa", "Sulayman Howells", "Akash Jordan", "Imogen Conley", "Arda Lawson", "Shaurya Osborne", "Kurtis Burgess", "Marwah Levine", "John-James Ellis", "Pharrell Burgess", "Judah Miller", "Aneurin Medrano", "Nellie Cordova", "Georgie Townsend", "Charleigh Preece", "Chyna Sinclair", "Tiago Calvert"],
    "abstract": "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "teams": [
      {
        "teamName": "Edinburgh",
        "teamYear": 2021,
        "teamTracks": ["Molecular Evolutionary Machines", "Pathway Evolutionary Outcomes"],
        "teamWikiURL": "#",
        "teamPosterURL": "#",
        "teamPresentationURL": "#",
        "teamAwards": [],
      },
    ]
  },
  {
    "id": 9,
    "doi": "https://doi.org/10.1101/mock-article",
    "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel.",
    "authors": ["Chong Teng", "Junhao Lu", "Yang Liu",],
    "abstract": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta porttitor urna, eu placerat felis laoreet sit amet. Integer elementum mauris vitae fringilla bibendum. Donec tempor semper sem vitae cursus. Sed malesuada metus non ultricies iaculis. Integer vestibulum dapibus imperdiet. Maecenas posuere sagittis sodales. Pellentesque consectetur ipsum vitae lorem varius, ac maximus neque feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam imperdiet ipsum ut libero maximus scelerisque. Fusce metus ligula, commodo id est ut, aliquet venenatis odio. Sed id urna blandit, rutrum diam vitae, fringilla ipsum. Nunc in lacus vel ante blandit pharetra blandit vitae odio. Integer pharetra in purus ac hendrerit. Quisque sed metus ultricies, iaculis augue at, lobortis neque. Aliquam tincidunt faucibus dolor, et tempor leo vestibulum quis.Integer tempus nunc et justo tristique, bibendum blandit est porttitor. Nulla vestibulum ornare elit, sed consectetur magna blandit in. Sed in augue lobortis, efficitur augue in, congue eros. Donec consectetur massa nec sollicitudin varius. Aenean nec velit nunc. Nullam malesuada dolor odio, vel tristique diam placerat et. Duis non eros nunc. Aliquam luctus quis tellus sit amet vestibulum. Maecenas vitae erat libero. Quisque eros nisl, lacinia vitae dolor ac, imperdiet aliquam dolor. Nam auctor, sem ut consectetur ullamcorper.",
    "teams": [
      {
        "teamName": "Boston College",
        "teamYear": 2020,
        "teamTracks": ["Molecular Evolutionary Outcomes", "Genome Evolutionary Machines"],
        "teamWikiURL": "#",
        "teamPosterURL": "#",
        "teamPresentationURL": "#",
        "teamAwards": [],
      },
    ]
  },  {
    "id": 10,
    "doi": "https://doi.org/10.1101/mock-article",
    "title": "Lorem Ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod sed do eiusmod Ipsum",
    "authors": ["Iyla Elliott", "Brady Figueroa", "Sulayman Howells", "Akash Jordan", "Imogen Conley", "Arda Lawson", "Shaurya Osborne", "Kurtis Burgess", "Marwah Levine", "John-James Ellis", "Pharrell Burgess", "Judah Miller", "Aneurin Medrano", "Nellie Cordova", "Georgie Townsend", "Charleigh Preece", "Chyna Sinclair", "Tiago Calvert"],
    "abstract": "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "teams": [
      {
        "teamName": "Edinburgh",
        "teamYear": 2021,
        "teamTracks": ["Molecular Evolutionary Machines", "Pathway Evolutionary Outcomes"],
        "teamWikiURL": "#",
        "teamPosterURL": "#",
        "teamPresentationURL": "#",
        "teamAwards": [],
      },
    ]
  },
  {
    "id": 11,
    "doi": "https://doi.org/10.1101/mock-article",
    "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel.",
    "authors": ["Chong Teng", "Junhao Lu", "Yang Liu",],
    "abstract": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta porttitor urna, eu placerat felis laoreet sit amet. Integer elementum mauris vitae fringilla bibendum. Donec tempor semper sem vitae cursus. Sed malesuada metus non ultricies iaculis. Integer vestibulum dapibus imperdiet. Maecenas posuere sagittis sodales. Pellentesque consectetur ipsum vitae lorem varius, ac maximus neque feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam imperdiet ipsum ut libero maximus scelerisque. Fusce metus ligula, commodo id est ut, aliquet venenatis odio. Sed id urna blandit, rutrum diam vitae, fringilla ipsum. Nunc in lacus vel ante blandit pharetra blandit vitae odio. Integer pharetra in purus ac hendrerit. Quisque sed metus ultricies, iaculis augue at, lobortis neque. Aliquam tincidunt faucibus dolor, et tempor leo vestibulum quis.Integer tempus nunc et justo tristique, bibendum blandit est porttitor. Nulla vestibulum ornare elit, sed consectetur magna blandit in. Sed in augue lobortis, efficitur augue in, congue eros. Donec consectetur massa nec sollicitudin varius. Aenean nec velit nunc. Nullam malesuada dolor odio, vel tristique diam placerat et. Duis non eros nunc. Aliquam luctus quis tellus sit amet vestibulum. Maecenas vitae erat libero. Quisque eros nisl, lacinia vitae dolor ac, imperdiet aliquam dolor. Nam auctor, sem ut consectetur ullamcorper.",
    "teams": [
      {
        "teamName": "Boston College",
        "teamYear": 2020,
        "teamTracks": ["Molecular Evolutionary Outcomes", "Genome Evolutionary Machines"],
        "teamWikiURL": "#",
        "teamPosterURL": "#",
        "teamPresentationURL": "#",
        "teamAwards": [],
      },
    ]
  },
]

export default mockSearchResult;