export const featuredCardData = async () => {
    const response = await fetch('featuredJobs.json')
    const featuredData = await response.json()
    // console.log(featuredData);

    return { featuredData };

} 