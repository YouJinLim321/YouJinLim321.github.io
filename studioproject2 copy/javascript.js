$('.container').infiniteScroll({
	status: '.page-load-status',	
  path: getPenPath,
  append: '.post'
});

function getPenPath() {
  const nextPenSlugs = [
    '3d9a3b8092ebcf9bc4a72672b81df1ac',
    '2cde50c59ea73c47aec5bd26343ce287',
    'd83110c5f71ea23ba5800b6b1a4a95c4',
  ];

  let slug = nextPenSlugs[ this.loadCount ];
  if ( slug ) return `/desandro/debug/${slug}`;
}
