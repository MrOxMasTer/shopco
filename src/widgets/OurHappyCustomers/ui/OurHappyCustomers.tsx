'use client';

import { Comment } from '@/entities/User';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/ui';
import Autoplay from 'embla-carousel-autoplay';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { listComments } from '../constants/listComments';

export const OurHappyCustomers = () => {
  return (
    <section>
      <div className="container pt-10">
        <Carousel
          opts={{ loop: true }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}>
          <div className="flex justify-between">
            <h2 className="stn_title text-left">Our Happy Customers</h2>
            <div className="relative flex items-end gap-[21px] self-end">
              <CarouselPrevious className="static h-5 w-5 translate-y-0 border-[0px]">
                <ArrowLeft className="h-5 w-5" />
              </CarouselPrevious>
              <CarouselNext className="static h-5 w-5 translate-y-0 border-[0px]">
                <ArrowRight className="h-5 w-5" />
              </CarouselNext>
            </div>
          </div>
          <CarouselContent className="my-6">
            {listComments.map(({ id, content, name, rating, verified }) => (
              <CarouselItem key={id}>
                <Comment
                  content={content}
                  name={name}
                  rating={rating}
                  verified={verified}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};
