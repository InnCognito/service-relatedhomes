module.exports = {
  getImg: () => {
    const arr = [
      'https://ghrsea07.s3-us-west-2.amazonaws.com/SDC-homes/0.jpg',
      'https://ghrsea07.s3-us-west-2.amazonaws.com/SDC-homes/1.jpg',
      'https://ghrsea07.s3-us-west-2.amazonaws.com/SDC-homes/2.jpg',
      'https://ghrsea07.s3-us-west-2.amazonaws.com/SDC-homes/3.jpg',
      'https://ghrsea07.s3-us-west-2.amazonaws.com/SDC-homes/4.jpg',
      'https://ghrsea07.s3-us-west-2.amazonaws.com/SDC-homes/5.jpg',
      'https://ghrsea07.s3-us-west-2.amazonaws.com/SDC-homes/6.jpg',
      'https://ghrsea07.s3-us-west-2.amazonaws.com/SDC-homes/7.jpg',
      'https://ghrsea07.s3-us-west-2.amazonaws.com/SDC-homes/8.jpg',
      'https://ghrsea07.s3-us-west-2.amazonaws.com/SDC-homes/9.jpg',
      'https://ghrsea07.s3-us-west-2.amazonaws.com/SDC-homes/10.jpg',
      'https://ghrsea07.s3-us-west-2.amazonaws.com/SDC-homes/11.jpg',
      'https://ghrsea07.s3-us-west-2.amazonaws.com/SDC-homes/12.jpg',
      'https://ghrsea07.s3-us-west-2.amazonaws.com/SDC-homes/13.jpg',
      'https://ghrsea07.s3-us-west-2.amazonaws.com/SDC-homes/14.jpg',
      'https://ghrsea07.s3-us-west-2.amazonaws.com/SDC-homes/15.jpg',
      'https://ghrsea07.s3-us-west-2.amazonaws.com/SDC-homes/16.jpg',
      'https://ghrsea07.s3-us-west-2.amazonaws.com/SDC-homes/17.jpg',
      'https://ghrsea07.s3-us-west-2.amazonaws.com/SDC-homes/18.jpg',
      'https://ghrsea07.s3-us-west-2.amazonaws.com/SDC-homes/19.jpg',
      'https://ghrsea07.s3-us-west-2.amazonaws.com/SDC-homes/20.jpg',
      'https://ghrsea07.s3-us-west-2.amazonaws.com/SDC-homes/21.jpg',
      'https://ghrsea07.s3-us-west-2.amazonaws.com/SDC-homes/22.jpg',
      'https://ghrsea07.s3-us-west-2.amazonaws.com/SDC-homes/23.jpg',
      'https://ghrsea07.s3-us-west-2.amazonaws.com/SDC-homes/24.jpg'
    ];
    return arr[Math.floor(Math.random() * arr.length)];
  },
};
