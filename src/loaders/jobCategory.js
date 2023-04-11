

export const jobCategoryLoader = async () => {
    const response = await fetch('jobCategory.json')
    const categoryData = await response.json()
    return categoryData;
}