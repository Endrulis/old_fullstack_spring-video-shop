package com.codeacademy.api.mapper;

import com.codeacademy.api.dto.CreateOrderRequest;
import com.codeacademy.api.dto.OrderDto;
import com.codeacademy.api.entities.Order;
import org.springframework.stereotype.Service;

@Service
public class OrderMapperImpl implements OrderMapper {

    @Override
    public Order toOrder( CreateOrderRequest createOrderRequest) {
        if (createOrderRequest == null) {
            return null;
        }
        return new Order(createOrderRequest.getDescription());
    }

    @Override
    public OrderDto toOrderDto( Order order) {
        if (order == null) {
            return null;
        }
        OrderDto.UserDto userDto = new OrderDto.UserDto(order.getUser().getEmail(), order.getUser().getFullName());
        return new OrderDto(order.getId(), order.getDescription(), order.getCreatedAt(), userDto);
    }
}
