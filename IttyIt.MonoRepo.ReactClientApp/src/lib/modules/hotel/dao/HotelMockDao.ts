import { HotelDaoInterface } from './HotelDaoInterface';
import data from '../../../../../data.json';
import { HotelDto } from '../../HotelDto';

export default class HotelMockDao implements HotelDaoInterface {
    async getHotels(): Promise<HotelDto[]> {
        const response = data;

        return new Promise(resolve => {
            const hotels = response.results.map(
                (hotel: any): HotelDto => {
                    let cancellationTitle = '';
                    switch (hotel.offer.cancellationOption.cancellationType) {
                        case 'NOT_REFUNDABLE':
                            cancellationTitle = 'Not Refundable';
                            break;
                        case 'FREE_CANCELLATION':
                            cancellationTitle = 'Free cancellation';
                            break;
                    }

                    /**
                     * TODO:
                     *  used lodash to get the value example: lodash.get(hotel,offer.displayPrice.amount) this
                     *  will get a bit more of defensive coding
                     *
                     *  for mocks this is fine - we control the data
                     */
                    return {
                        id: hotel.id,
                        name: hotel.property.title,
                        currency: hotel.offer.displayPrice.currency,
                        price: hotel.offer.displayPrice.amount,
                        starRating: hotel.property.rating.ratingValue,
                        starRatingType: hotel.property.rating.ratingType,
                        imageUrl: hotel.property.previewImage.url,
                        promotionTitle: hotel.offer.promotion.title,
                        cancellationTitle,
                        offerName: hotel.offer.name,
                        address: hotel.property.address && hotel.property.address.join(','),
                        imageCaption: hotel.property.previewImage.caption,
                    };
                },
            );

            setTimeout(() => {
                resolve(hotels);
            }, 1000);
        });
    }
}
